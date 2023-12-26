import React, { FC, useEffect, useState } from 'react';
import ArrowTop from "../../../container/icons/ArrowTop";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";



const SignLogItem: FC= () => {
    const totalSum = useSelector((state: RootState) => state.profile.totalPrice);

    const [sign] = useState<any[]>([
        {
            title: `Заказ №$`,
        },
        {
            price: new Date().toLocaleString('ru-RU'),
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
            arrow: <ArrowTop color='#1E2546'/>
        }
    ]);

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
