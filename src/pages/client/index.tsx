import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";
import Percent from "../../container/icons/percent";

const Client: FC = () => {
    const navigate = useNavigate()

    const [ slide, SetSlide ] = useState<any[]>([
        {
            key: '',
            img: '/img/png/cauldrons_1.png',
            text: '[test] Сковорода Riley&Tailor Modern 20 см-1',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии'
        },
        {
            key: '',
            img: '/img/png/cauldrons_2.png',
            text: 'Набор из 6 предм.Modern 103306',
            paragraph: '686 000 UZS',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии',
            className: 'cauldrons',
            rate: <Percent/>,
            class: 'cauldrons-percentage'
        },
        {
            key: '',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 8 предм.Modern 102308',
            txt: 'Артикул: 102308',
            price: '987 000 UZS',
            span: 'Есть в наличии'
        },
        {
            key: '',
            img: '/img/png/cauldrons_1.png',
            text: 'Набор из 6 предм.Modern 102306',
            txt: 'Артикул: 102306',
            price: '728 000 UZS',
            span: 'Есть в наличии'
        },
    ])

    function onClickOpen(item: any) {
        navigate('product', {
            state: {
                data: {
                    item
                },
            },
        })
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
                        onSlideChange={ () => console.log('slide change') }
                    >
                        { slide.map((item, idx) => (
                            <>
                                <SwiperSlide className="client-slide"
                                             key={ idx }
                                >
                                    <div className={`client-cauldrons ${item.className}`}>
                                        <div>
                                            <span className={item.class}>{item.rate}</span>
                                        </div>
                                        <div className="client-img" onClick={() => {
                                            onClickOpen(item)
                                        }}>
                                            <img src={ item.img } alt=""/>
                                        </div>
                                        <div className="client-description">
                                            <p>{ item.text }</p>
                                            <span>{ item.txt }</span>
                                        </div>
                                        <div className="client-price">
                                            <p>{ item.paragraph }</p>
                                            <Button
                                                text={ item.price }
                                                onClick={ onClickOpen }
                                                className={ 'btn' }
                                                rightIcon={ <Basket color={ '#1E2546' } size={ 40 }/> }
                                            />
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