import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";

const Carousel: FC = () => {
    const navigate = useNavigate()

    const [ carousel, SetCarousel ] = useState<any[]>([
        {
            key: '',
            carousel: true,
            text: 'Приготовление без пригорания',
            paragraph: 'Коллекция Classic',
            btn: 'Набор из 8 предм.Modern 102308'
        },
        {
            key: '',
            carousel: true,
            text: 'Приготовление еды без пригорания',
            paragraph: 'Коллекция Loft',
            btn: 'Набор из 6 предм.Modern 102306'
        },
        {
            key: '',
            carousel: true,
            text: 'Приготовление еды без пригорания',
            paragraph: 'Коллекция Modern',
            btn: 'Google'
        }
    ])

    function OnClickNext() {
        navigate('')
    }

    return (
        <div className="carousel-page pt-2">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    { carousel.map((item, idx) => {
                        return (
                            <div className="carousel-item active" data-interval="5"
                                 key={ idx }
                            >
                                { item.carousel && (
                                    <>
                                        <img src="/img/png/foot.jpg" alt="" className="d-block w-100"/>
                                        <div className="carousel-caption">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-lg-6">
                                                        <h2>{ item.text }</h2>
                                                        <p>{ item.paragraph }</p>
                                                        <Button
                                                            text={ item.btn }
                                                            onClick={ OnClickNext }
                                                            className={ 'btn carousel-caption-btn' }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) }
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
};

export default Carousel;