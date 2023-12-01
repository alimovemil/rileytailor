import React, { FC, useState } from 'react';
import { NavLink } from "react-router-dom";

const ProductItem: FC = () => {

    const navigationHidden = [
        {
            title: 'Коллекция',
            link: 'dz',
            paddingBottom: '5px'
        },
        {
            link: 'collection',
            text: 'Classic'
        },
        {
            link: 'collection',
            text: 'Loft'
        },
        {
            link: 'collection',
            text: 'Modern'
        },
    ]

    const links = [
        {
            title: 'Продукция',
            link: '',
            paddingBottom: '5px'
        },
        {
            text: 'Вся продукция',
            link: '/shop'
        },
        {
            link: '#',
            text: 'Наборы'
        },
        {
            link: '#',
            text: 'Сковорода'
        },
        {
            link: '#',
            text: 'Сковорода Глубокая'
        },
        {
            link: '#',
            text: 'Сковорода для блинов'
        },
        {
            link: '#',
            text: 'Сковорода Сотэ'
        },
        {
            link: '#',
            text: 'Кастрюля'
        },
        {
            link: '#',
            text: 'Ковш'
        },
        {
            link: '#',
            text: 'Сотейник'
        },
    ]

    const current = [
        {
            title: 'О нас',
            link: '#',
            paddingBottom: '5px'
        },
        {
            text: 'Качество',
            link: '#',
        },
        {
            link: '#',
            text: 'Магазины'
        },
        {
            link: '',
            text: 'Riley & Tailor'
        },
        {
            link: '#',
            text: 'Контакты'
        }
    ]

    return (
        <div className="product-block-content-item">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="product-block-content-item-inner">
                            <div className="col-12 col-sm-6 col-md-3 col-xl-2">
                                <div className="product-block-content-item-meta">

                                    { navigationHidden.map(({title, link, text, paddingBottom}) => {
                                        return (
                                            <div className="product-block-content-item-meta-text">
                                                <h3 style={ {paddingBottom} }>{ title }</h3>
                                                <NavLink
                                                    to={ link }
                                                    key={ link }
                                                >
                                                    <span>{ text }</span>
                                                </NavLink>
                                            </div>
                                        );
                                    }) }
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 col-xl-2">
                                <div className="product-block-content-item-meta">
                                    { links.map(({title, link, text, paddingBottom}) => {
                                        return (
                                            <div className="product-block-content-item-meta-text">
                                                <h3 style={ {paddingBottom} }>{ title }</h3>
                                                <NavLink
                                                    to={ link }
                                                    key={ link }
                                                >
                                                    <span>{ text }</span>
                                                </NavLink>
                                            </div>
                                        );
                                    }) }
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 col-xl-2">
                                <div className="product-block-content-item-meta">
                                    { current.map(({title, link, text, paddingBottom}) => {
                                        return (
                                            <div className="product-block-content-item-meta-text">
                                                <h3 style={ {paddingBottom} }>{ title }</h3>
                                                <NavLink
                                                    to={ link }
                                                    key={ link }
                                                >
                                                    <span>{ text }</span>
                                                </NavLink>
                                            </div>
                                        );
                                    }) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
