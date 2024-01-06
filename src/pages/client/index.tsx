import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";
import Percent from "../../container/icons/percent";
import { useAppDispatch } from "../../redux/store";
import { CauldronsSave, updateBasketInfo } from "../../redux/reducers/basket/basketRe";
import { startLoading, stopLoading } from '../../redux/slices/loadingSlice';
import Tick from "../../container/icons/Tick";

const Client: FC = () => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const [ selectedItem, setSelectedItem ] = useState<string | null>(null);

    const [ isData, SetIsData ] = useState<any[]>([
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
            price: '1 000 UZS',
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
    ])

    function onClickOpen(item: any) {
        dispatch(startLoading());
        const {rate, ...itemWithoutRate} = item;

        const updatedItem = {
            ...itemWithoutRate,
            span: item.key === '2' && item.span === 'Есть в наличии' ? 'Нет в наличии' : item.span,
        };

        const updatedData = isData.map((dataItem) =>
            dataItem.key === updatedItem.key ? updatedItem : dataItem
        );

        SetIsData(updatedData);
        setSelectedItem(updatedItem.key);

        navigate(`product/${ item.key }`, {
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
        <div className="client">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="collection-header">
                            <h1>Самое важное для приготовления</h1>
                        </div>
                    </div>
                </div>
                <div className="client-swiper d-flex">
                    { isData.map((item, idx) => (
                        <>
                            <div className={ `client-slide ${ item.classes }` }
                                 key={ idx }
                            >
                                <div className={ `client-cauldrons ${ item.className }` }>
                                    <div className={ `${ item.class }` }>
                                        { item.rate }
                                    </div>
                                    <div id={ item.id } className="client-img"
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
                                            text={ item.price }
                                            onClick={ () => onClickBasket(item) }
                                            className={ `btn ${ item.btn }` }
                                            rightIcon={
                                                selectedItem === item.key ? (
                                                    <Tick size={ 40 }/>
                                                ) : (
                                                    <Basket color={ '#1E2546' } size={ 40 }/>
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
            </div>
        </div>
    );
};

export default Client;