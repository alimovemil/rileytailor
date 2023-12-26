import React, { FC, useEffect, useState } from 'react';
import Button from "../form/Button";
import Basket from "../../container/icons/Basket";
import { useNavigate } from "react-router-dom";
import Pagination from "../form/Pagination";
import Percent from "../../container/icons/percent";
import { CauldronsSave, updateBasketInfo } from "../../redux/reducers/basket/basketRe";
import {useAppDispatch, useAppSelector } from "../../redux/store";
import { startLoading, stopLoading } from "../../redux/slices/loadingSlice";
import Tick from "../../container/icons/Tick";

const CollectionSwiper: FC = () => {

    const navigate = useNavigate()
    const { rangeValues } = useAppSelector(state => state.filter);

    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const dispatch = useAppDispatch();

    const [isProduct, setIsProduct] = useState<any[]>([
        {
            key: '1',
            img: '/img/png/cauldrons_1.png',
            text: '[test] Сковорода Riley&Tailor Modern 20 см-1',
            txt: 'Артикул: 103304',
            price: '1 000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 0
        },
        {
            key: '2',
            img: '/img/png/cauldrons_2.png',
            text: 'Набор из 6 предм.Modern 103306',
            paragraph: '686 000 UZS',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии',
            className: 'cauldrons',
            rate: <Percent/>,
            cost: 'Стоимость',
            class: 'cauldrons-svg',
            number: 0,
            classes: 'client-hover',
            btn: 'basket-btn'
        },
        {
            key: '3',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 8 предм.Modern 102308',
            txt: 'Артикул: 102308',
            price: '987 000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 1
        },
        {
            key: '4',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 6 предм.Modern 102306',
            txt: 'Артикул: 102306',
            price: '728 000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 0
        },
        {
            key: '5',
            img: '/img/png/cauldrons_2.png',
            text: 'Набор из 6 предм.Modern 103306',
            paragraph: '686 000 UZS',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии',
            className: 'cauldrons',
            rate: <Percent/>,
            cost: 'Стоимость',
            class: 'cauldrons-svg',
            number: 0,
            classes: 'client-hover',
            btn: 'basket-btn'
        },
        {
            key: '6',
            img: '/img/png/cauldrons_1.png',
            text: '[test] Сковорода Riley&Tailor Modern 20 см-1',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 0
        },
        {
            key: '7',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 8 предм.Modern 102308',
            txt: 'Артикул: 102308',
            price: '987 000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 1
        },
        {
            key: '8',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 6 предм.Modern 102306',
            txt: 'Артикул: 102306',
            price: '728 000 UZS',
            span: 'Есть в наличии',
            cost: 'Стоимость',
            number: 0
        }
    ])

    const [filteredSwiper, setFilteredSwiper] = useState<any[]>([]);

    const [ activePage, setActivePage ] = useState(1);

    const [ totalPages ] = useState(1);

    useEffect(() => {
        const filteredData = isProduct.filter((item) => {
            const itemPrice = parseInt(item.price.replace(/\D/g, ''));
            return (
                itemPrice >= rangeValues[0] &&
                itemPrice <= rangeValues[1]
            );
        });
        setFilteredSwiper(filteredData);
    }, [rangeValues, isProduct, dispatch]);

    function onClickOpen(item: any) {
        dispatch(startLoading());
        const { rate, ...itemWithoutRate } = item;

        const updatedItem = {
            ...itemWithoutRate,
            span: item.key === '2' && item.span === 'Есть в наличии' ? 'Нет в наличии' : item.span,
        };

        const updatedData = isProduct.map((dataItem) =>
            dataItem.key === updatedItem.key ? updatedItem : dataItem
        );

        setIsProduct(updatedData);
        setSelectedItem(updatedItem.key);

        navigate(`product/${item.key}`, {
            state: {
                data: {
                    item: updatedItem,
                },
            },
        });

        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    function onClickBasket(item: any) {
        dispatch(CauldronsSave(item));
        dispatch(updateBasketInfo());
        setSelectedItem(item.key);
    }

    return (
        <div className="swiper-content client">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-wrap">
                            { filteredSwiper.map((item, idx) => (
                                <>
                                    <div
                                        className={ `client-slide ${ item.classes }` }
                                        key={ `swiper-content-item-${ idx }` }
                                    >
                                        <div className={ `client-cauldrons ${ item.className }` }>
                                            <div className={ `${ item.class }` }>
                                                { item.rate }
                                            </div>
                                            <div className="client-img"
                                                 onClick={ () => {
                                                     onClickOpen(item)
                                                 } }>
                                                <img src={ item.img } alt=""/>
                                            </div>
                                            <div className="client-description">
                                                <p>{ item.text }</p>
                                                <div style={ {display: "none"} }>{ item.cost }</div>
                                                <span>{ item.txt }</span>
                                            </div>
                                            <div className="client-price">
                                                <p>{ item.paragraph }</p>
                                                <Button
                                                    text={item.price}
                                                    onClick={() => onClickBasket(item)}
                                                    className={`btn ${item.btn}`}
                                                    rightIcon={
                                                        selectedItem === item.key ? (
                                                            <Tick size={40} />
                                                        ) : (
                                                            <Basket color={'#1E2546'} size={40} />
                                                        )
                                                    }
                                                />
                                                <div style={ {display: "none"} }>{ item.number }</div>
                                                <div className="client-available">
                                                    <span>{ item.span }</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )) }
                        </div>
                        <div className='logs__carousel'>
                            <Pagination
                                activePage={ activePage }
                                setActivePage={ setActivePage }
                                pages={ totalPages }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionSwiper;