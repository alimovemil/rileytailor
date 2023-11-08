import React, { FC, useEffect, useState } from 'react';
import TextField from "../../components/form/TextField";
import Search from "../../container/icons/Search";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Person from "../../container/icons/Person";
import HeaderOpen from "../../components/header/headerOpen";
import Basket from "../../container/icons/Basket";
import MenuHeader from "../../components/header/menuHeader";
import HeaderBasket from "../../components/header/HeaderBasket";
import { CSSTransition } from "react-transition-group";


const Header: FC = () => {
    const navigate = useNavigate()
    const [ isModal, setIsModal ] = useState(false);
    const [ isShowOpen, setShowOpen ] = useState<any | boolean>(true)
    const [ isDialog, SetIsDialog ] = useState(false)

    function onClickOpen() {
        navigate('')
    }

    function onClickModal() {
        setIsModal(true);
    }

    function onClickDialog() {
        SetIsDialog(true)
    }

    return (
        <div className="header">
            <MenuHeader
                onClose={ () => setShowOpen(!isShowOpen) }
                isOpen={ isShowOpen }
            />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-top">
                            <div className="col-2 col-lg-1 d-flex justify-content-center">
                                <div className="header-logo">
                                    <a href="#"><img src="/img/png/logo.svg" alt=""/></a>
                                </div>
                            </div>

                            <div className="col-5 header-field">
                                <div className="header-input">
                                    <TextField
                                        value={ '' }
                                        type={ 'type' }
                                        placeholder={ 'Поиск' }
                                        imgRight={ <Search color={ '#1E2546' }/> }
                                    />
                                </div>
                            </div>

                            <div className="col-2 header-number">
                                <div className="header-contact">
                                    <p>Наш номер телефона</p>
                                    <a href="tel:+998 71 123-45-67">+998 71 123-45-67</a>
                                </div>
                            </div>
                            <div className="col-2 d-flex justify-content-center header-person">
                                <div className="header-profile">
                                    <Button
                                        text={ 'Войти' }
                                        onClick={ onClickModal }
                                        leftIcon={ (<Person color={ '#1E2546' }/>) }
                                        className="header-btn"
                                    />
                                </div>
                            </div>

                            <HeaderOpen
                                setIsShow={ () => {
                                    setIsModal(false)
                                } }
                                isShow={ isModal }
                            />

                            <div className="col-2 col-xxl-3 header-amount">
                                <div className="header-basket">
                                    <Button
                                        text={ '0' }
                                        onClick={ onClickDialog }
                                        leftIcon={ <Basket/> }
                                        className={ 'header-btns' }
                                    />
                                    <div className="header-uzs">
                                        <p>Корзина</p>
                                        <span>0 UZS</span>
                                    </div>
                                </div>
                            </div>
                            <CSSTransition
                            in={isDialog}
                            timeout={200}
                            classNames="z"
                            unmountOnExit
                            >
                                <HeaderBasket
                                    isOpen={ isDialog }
                                    setIsOpen={ () => {
                                        SetIsDialog(false)
                                    } }
                                />
                            </CSSTransition>

                        </div>
                    </div>
                </div>
            </div>
            <div className="header-border"></div>


        </div>
    );
};

export default Header;