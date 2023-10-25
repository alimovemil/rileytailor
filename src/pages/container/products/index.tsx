import React, { FC, useState } from 'react';
import Calculator from "../icons/Сalculator";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";

const Product: FC = () => {
    const navigate = useNavigate()

    const [ list, setList ] = useState<any[]>([
        {
            key: '',
            name: 'Cart'
        },
        {
            key: '',
            name: 'Оплата'
        },
        {
            key: '',
            name: 'Гарантия'
        },
        {
            key: '',
            name: 'Магазины'
        },
        {
            key: '',
            name: 'О нас'
        },
        {
            key: '',
            name: 'Контакты'
        }
    ])

    function onClickOpen() {
        navigate('')
    }

    return (
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product-block">
                            <div className="product-left">
                                <Calculator/>
                                <p>Продукция</p>
                            </div>
                            <div className="product-right">
                                { list.map((item, idx) => (
                                    <Button
                                        key={idx}
                                        text={item.name}
                                        onClick={onClickOpen}
                                        className={'btn'}
                                    />
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;