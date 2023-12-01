    import React, { FC, useEffect, useState } from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import Button from "../../components/form/Button";
    import { useLocation, useNavigate } from "react-router-dom";
    import Basket from "../../container/icons/Basket";
    import Percent from "../../container/icons/percent";

    const Client: FC = () => {
        const navigate = useNavigate()

        const [ isData, SetIsData ] = useState<any[]>([
            {
                key: '1',
                img: '/img/png/cauldrons_1.png',
                text: '[test] Сковорода Riley&Tailor Modern 20 см-1',
                txt: 'Артикул: 103304',
                price: '1000 UZS',
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
        ])

        function onClickOpen(item: any) {
            const { rate, ...itemWithoutRate } = item;
            navigate(`product/${item.key}`, {
                state: {
                    data: {
                        item: itemWithoutRate,
                    },
                },
            });
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
                    <div className="client-swiper">
                        <Swiper
                            spaceBetween={ 40 }
                            slidesPerView={ 2 }
                            breakpoints={ {
                                575: {
                                    width: 575,
                                    slidesPerView: 2,
                                },

                                320: {
                                    width: 320,
                                    slidesPerView: 1,
                                },
                            } }
                        >
                            { isData.map((item, idx) => (
                                <>
                                    <SwiperSlide className={`client-slide ${item.classes}`}
                                                 key={ idx }
                                    >
                                        <div className={ `client-cauldrons ${ item.className }` }>
                                            <div className={`${item.class}`}>
                                                {item.rate}
                                            </div>
                                            <div id={ item.id } className="client-img"
                                                 onClick={ () => {onClickOpen(item)} }>
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
                                                    onClick={ () => {onClickOpen(item)} }
                                                    className={ `btn ${item.btn}` }
                                                    rightIcon={ <Basket color={ '#1E2546' } size={ 40 }/> }
                                                />
                                                <div style={ {display: "none"} }>{ item.number }</div>
                                                <div className="client-available">
                                                    <span>{ item.span }</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )) }

                        </Swiper>
                    </div>
                </div>
            </div>
        );
    };

    export default Client;