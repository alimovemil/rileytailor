import React, { FC } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";

const Banner: FC = () => {
    const navigate = useNavigate()

    function onClickInfo() {
        navigate('/product',)
    }

    return (
        <div className="banner-item">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-style">
                        <div className="banner-item-block col-type">
                            <div className="col-12 col-lg-6 col-md-7 col-sm-12">
                                <h2>Всё включено и даже больше</h2>
                                <p>Наборы Riley & Tailor!!!</p>
                                <Button
                                    text={ 'Подробнее' }
                                    onClick={ onClickInfo }
                                    className={ 'btn' }
                                />
                            </div>
                            <div className="col-12 col-lg-6 col-md-5 col-sm-12">
                                <div className="banner-item-block-image">
                                    <img src="https://rileytailor.uz/wp-content/uploads/2023/04/loft2-1024x729.png"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;