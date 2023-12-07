import React, { FC, useEffect, useState } from 'react';
import ArrowTop from "../../../container/icons/ArrowTop";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

interface SignLogItemProps {
    time?: string;
    date?: string;
}

const SignLogItem: FC<SignLogItemProps> = ({ time, date }) => {
    const totalSum = useSelector((state: RootState) => state.profile.totalPrice);
    const currentOrder = useSelector((state: RootState) => state.profile.currentOrder);

    const [orderNumber, setOrderNumber] = useState<number>(currentOrder ? currentOrder.orderNumber : 0);

    const [sign] = useState<any[]>([
        {
            title: `Заказ №${orderNumber}`,
        },
        {
            price: '18.08.2022, 12:35'
        },
        {
            price: 'Click'
        },
        {
            price: ''
        },
        {
            end: 'Завершен',
        },
        {
            arrow: <ArrowTop color='#1E2546'/>
        }
    ]);

    useEffect(() => {
        console.log("useEffect called with currentOrder:", currentOrder);
        if (currentOrder && currentOrder.orderNumber !== orderNumber) {
            setOrderNumber(currentOrder.orderNumber);
        }
    }, [currentOrder, orderNumber]);


    return (
        <div className="sign-content-order-history-top">
            {sign.map((list, idx) => (
                <div key={idx}>
                    <h4>{list.title}</h4>
                    <span>{list.end}</span>
                    <div>{list.arrow}</div>
                    <p>{idx === 3 ? totalSum.toLocaleString('ru-RU') + ' UZS' : list.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SignLogItem;
