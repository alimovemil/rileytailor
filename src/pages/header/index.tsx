import React, { FC, useEffect, useState } from 'react';
import TextField from "../../components/form/TextField";
import Search from "../../container/icons/Search";
import Button from "../../components/form/Button";
import Person from "../../container/icons/Person";
import HeaderOpen from "../../components/header/headerOpen";
import Basket from "../../container/icons/Basket";
import MenuHeader from "../../components/header/menuHeader";
import HeaderBasket from "../../components/header/HeaderBasket";
import { CSSTransition } from "react-transition-group";
import ProductItem from "../../components/product/product";
import Logo from "../../container/icons/Logo";
import { useNavigate } from "react-router-dom";


const Header: FC = () => {
    const navigate = useNavigate()

    const [ isModal, setIsModal ] = useState(false);
    const [ isDialog, SetIsDialog ] = useState(false)
    const [ isProductItemVisible, setProductItemVisible ] = useState(false);

    const handleBurgerMenuClick = () => {
        setProductItemVisible(!isProductItemVisible);
    };

    function onClickModal() {
        setIsModal(true);
    }

    function onClickDialog() {
        SetIsDialog(true)
    }


    function onClickHome() {
        navigate('/')
    }

    return (
        <div className="header">
            <MenuHeader
                onClose={ handleBurgerMenuClick }
                isOpen={ isProductItemVisible }
                onBurgerMenuClick={ handleBurgerMenuClick }
            />

            { isProductItemVisible && <ProductItem/> }
            <div className="container">
                <div className="row">
                    <div className="col-12 header-style">
                        <div className="header-top">
                            <div className="header-top-logo">
                                <Button text={ <Logo color={'#AC1931'}/> }
                                        onClick={ onClickHome }
                                        className={ 'btn' }
                                />
                            </div>

                            <div className="header-input">
                                <TextField
                                    value={ '' }
                                    type={ 'type' }
                                    placeholder={ 'Поиск' }
                                    imgRight={ <Search color={ '#1E2546' }/> }
                                />
                            </div>
                            <div className="header-top-item">
                                <div className="header-top-item-contact">
                                    <p>Наш номер телефона</p>
                                    <a href="tel:+998 71 123-45-67">+998 71 123-45-67</a>
                                </div>
                                <div className="header-top-item-profile">
                                    <Button
                                        text={ 'Войти' }
                                        onClick={ onClickModal }
                                        leftIcon={ (<Person color={ '#1E2546' }/>) }
                                        className="header-btn"
                                    />
                                </div>
                                <div className="header-top-item-basket">
                                    <Button
                                        text={ '0' }
                                        onClick={ onClickDialog }
                                        leftIcon={ <Basket/> }
                                        className={ 'header-top-item-basket-btns' }
                                    />
                                    <div className="header-top-item-basket-uzs">
                                        <p>Корзина</p>
                                        <span>0 UZS</span>
                                    </div>
                                </div>
                            </div>
                            <HeaderOpen
                                setIsShow={ () => {
                                    setIsModal(false)
                                } }
                                isShow={ isModal }
                            />

                            <CSSTransition
                                in={ isDialog }
                                timeout={ 200 }
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