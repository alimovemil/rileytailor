import React, { FC, useState } from 'react';
import ArrowTop from "../../../container/icons/ArrowTop";
import Button from "../../../components/form/Button";

interface SignLogItemProps {
    order: any[];
    count: number;
    date: string;
    orderNumber: number;
    onItemClick: () => void;
}

const SignLogItem: FC<SignLogItemProps> = ({ order, count, date, orderNumber, onItemClick }) => {
    const [isArrowRotated, setIsArrowRotated] = useState(false);

    const [sign] = useState<any[]>([
        {
            title: `Заказ №${orderNumber}`,
        },
        {
            price: '16.01.2024',
        },
        {
            price: 'Click',
        },
        {
            price: '',
        },
        {
            end: 'Завершен',
        },
        {
            arrow: <ArrowTop color='#1E2546' />
        }
    ]);

    const orderTotalSum = order.reduce((sum, item) => {
        const itemPrice = parseFloat(item.price.replace(/\D/g, ''));
        const itemCount = item.count || 1;
        return !isNaN(itemPrice) ? sum + itemPrice * itemCount : sum;
    }, 0);

    const handleArrowClick = () => {
        setIsArrowRotated(!isArrowRotated);
        onItemClick();
    };

    return (
        <div className="sign-content-order-history-list-wrap-item-top">
            {sign.map((list, idx) => (
                <div key={idx}>
                    <h4>{list.title}</h4>
                    <span>{list.end}</span>
                    {idx === sign.length - 1 && (
                        <Button
                            text={list.arrow}
                            className={`btn-arrow ${isArrowRotated ? 'rotate-down' : ''}`}
                            onClick={handleArrowClick}
                        />
                    )}
                    <p>{idx === 3 ? orderTotalSum.toLocaleString('ru-RU') + ' UZS' : list.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SignLogItem;
