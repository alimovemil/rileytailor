import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";

const Footer: FC = () => {

    const navigate = useNavigate()

    function onClickNew() {
        navigate('')
    }

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-item">
                                <div className="footer-block">
                                    <div className="footer-img">
                                        <img src="https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/logogold.svg" alt=""/>
                                    </div>

                                    <div className="footer-inner">
                                        <div className="footer-wrap">
                                            <div className="footer-btn">
                                                <Button
                                                    text={'Публичная офера'}
                                                    onClick={onClickNew}
                                                    className={'btn'}
                                                />

                                                <Button
                                                    text={'Правила использования'}
                                                    onClick={onClickNew}
                                                    className={'btn'}
                                                />
                                            </div>

                                            <div className="footer-paragraph">
                                                <p>© Riley & Tailor, 2022. Все права защищены.</p>
                                            </div>
                                        </div>

                                        <div className="footer-social">
                                            <img src="https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/telega.svg" alt=""/>
                                            <img src="https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/facebook.svg" alt=""/>
                                        </div>
                                    </div>


                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;