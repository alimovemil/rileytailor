import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../form/Button";
import Basket from "../../container/icons/Basket";
import { useNavigate } from "react-router-dom";
import Pagination from "../form/Pagination";
import Percent from "../../container/icons/percent";

const CollectionSwiper: FC = () => {

    const navigate = useNavigate()

    const [ activePage, setActivePage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    const swiperContent = [
        {
            swiper: true,
            key: 'swiper'
        },
        {
            swiper: true,
            key: 'swiper-list'
        },
        {
            swiper: true,
            key: 'swiper-item'
        }
    ]

    const swiper = [
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
    ]

    function onClickOpen(item: any) {
        const {rate, ...itemWithoutRate} = item;
        navigate(`/product/${ item.key }`, {
            state: {
                data: {
                    item: itemWithoutRate,
                },
            },
        });
    }

    return (
        <div className="swiper-content client">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        { swiperContent.map((list, idx) => (
                            <div key={ `swiper-content-${ idx }` }>
                                { list.swiper && (
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
                                        { swiper.map((item, idx) => (
                                            <>
                                                <SwiperSlide
                                                    className={`client-slide ${item.classes}`}
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
                                ) }
                            </div>
                        )) }
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