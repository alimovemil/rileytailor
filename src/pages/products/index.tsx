import React, { FC, useState } from 'react';
import Calculator from "../../container/icons/Сalculator";
import { NavLink } from "react-router-dom";
import ProductItem from "../../components/product/product";

const Product: FC = () => {

    const [ list, SetList ] = useState(false)

    const navigation = [
        {
            route: '',
            name: 'Партнёрство'
        },
        {
            route: '',
            name: 'Доставка'
        },
        {
            route: 'payment',
            name: 'Оплата',
        },
        {
            route: 's',
            name: 'Гарантия',
        },
        {
            route: '',
            name: 'Магазины',
        },
        {
            route: 'sq',
            name: 'О нас',
        },
        {
            route: 'sqs',
            name: 'Контакты',
        },
    ]

    const toggleBlock = () => {
        SetList(!list);
    };

    return (
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product-block">
                            <div className="product-left" onClick={ toggleBlock }>
                                { list && (
                                    <ProductItem/>
                                ) }
                                <Calculator/>
                                <p>Продукция</p>
                            </div>

                            <nav>
                                <div className="product-right">
                                    <div className="product-right-item">
                                        { navigation?.map(({route, name}) => {
                                            return (
                                                <NavLink
                                                    key={ route }
                                                    to={ route }
                                                    className="product-right-item-link"
                                                >
                                                    <span>{ name }</span>

                                                </NavLink>
                                            )
                                        }) }
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;