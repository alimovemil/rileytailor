import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Basket from "../icons/Basket";

const Client: FC = () => {
    const navigate = useNavigate()

    const [ slide, SetSlide ] = useState<any[]>([
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/04/101306-6-300x166.jpg',
            text: '[test] Сковорода Riley&Tailor Modern 20 см-1',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/04/103306-3-300x167.jpg',
            text: 'Набор из 6 предм.Modern 103306',
            paragraph: '686 000 UZS',
            txt: 'Артикул: 103304',
            price: '1000 UZS',
            span: 'Есть в наличии'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/04/102308-300x167.jpg',
            text: 'Набор из 8 предм.Modern 102308',
            txt: 'Артикул: 102308',
            price: '987 000 UZS',
            span: 'Есть в наличии'
        },
        {
            key: '',
            img: 'https://rileytailor.uz/wp-content/uploads/2023/04/102306-300x167.jpg',
            text: 'Набор из 6 предм.Modern 102306',
            txt: 'Артикул: 102306',
            price: '728 000 UZS',
            span: 'Есть в наличии'
        },
    ])

    function onClickOpen() {
        navigate('')
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
                        spaceBetween={ 50 }
                        slidesPerView={ 3 }
                        onSlideChange={ () => console.log('slide change') }
                    >
                        { slide.map((item, idx) => (
                            <>
                                <SwiperSlide className="client-slide"
                                             key={ idx }
                                >
                                    <div className="client-cauldrons">
                                        <div className="client-img">
                                            <img src={ item.img } alt=""/>
                                        </div>
                                        <div className="client-description">
                                            <p>{ item.text }</p>
                                            <span>{ item.txt }</span>
                                        </div>
                                        <div className="client-price">
                                            <p>{item.paragraph}</p>
                                            <Button
                                                text={ item.price }
                                                onClick={ onClickOpen }
                                                className={'btn'}
                                                rightIcon={<Basket color={'#1E2546'} size={40}/>}
                                            />
                                            <div className="client-available">
                                                <span>{item.span}</span>
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