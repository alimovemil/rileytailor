import React, { FC, useEffect, useState } from 'react';
import DialogRightByContent from "../dialog/DialogRightByContent";
import Close from "../../container/icons/Close";
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

interface HeaderOpenModal {
    isOpen: boolean
    setIsOpen: () => void
}

const HeaderBasket: FC<HeaderOpenModal> = (
    {
        isOpen,
        setIsOpen
    }
) => {
    const navigate = useNavigate()


    const cartDialog = [
        {
            img: '/img/png/frying_1.png',
            money: '1000',
            span: '987 000 UZS',
            cost: 'Набор из 6 предм.Modern 103306',
            number: '1'
        },
        {
            img: '/img/png/frying_1.png',
            money: '1000',
            span: '50 UZS',
            cost: 'количествоdsdsds',
            number: '1'
        },
        {
            img: '/img/png/frying_1.png',
            money: '1000',
            span: '50 UZS',
            cost: 'количествовывыйвцй',
            number: '1'
        },
    ]

    function onClickMinus() {
        navigate('')
    }

    return (
        <DialogRightByContent
            isOpen={ isOpen }
            closeModal={ () => {
                setIsOpen()
            } }
            closeIcon={ <Close/> }
            label={ 'Корзина' }
        >
            <div className="header-top-cart">
                <div className="header-top-cart-block">

                    { cartDialog.map((item, idx) => (
                        <div className="header-top-cart-block-item"
                             key={ idx }
                        >
                            <div className="header-top-cart-block-item-img">
                                <img src={ item.img } alt=""/>
                            </div>
                            <div className="header-top-cart-block-item-info">
                                <div className="header-top-cart-block-item-info-number">
                                    <div className="header-top-cart-block-item-info-number-quantity">
                                        <p className="header-top-cart-block-item-info-number-quantity-p">{ item.cost }</p>
                                        <div className="header-top-cart-block-item-info-number-quantity-span">
                                            <span>{ item.span }</span>
                                            <p>{ item.money }</p>
                                        </div>
                                    </div>
                                    <div className="header-top-cart-block-item-info-number-value">
                                        <div className="header-top-cart-block-item-info-number-value-btn">
                                            <Button
                                                text={ '-' }
                                                onClick={ onClickMinus }
                                                className="btn"
                                            />
                                            <span>{ item.number }</span>
                                            <Button
                                                text={ '+' }
                                                onClick={ onClickMinus }
                                                className="btn"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }

                </div>
                <div className="header-top-cart-bottom">
                    <div className="header-top-cart-bottom-total">
                        <span>43434343 UZS</span>
                    </div>
                    <Button
                        text={ 'Оформить заказ' }
                        onClick={ onClickMinus }
                        className={ 'btn' }
                    />
                </div>
            </div>
        </DialogRightByContent>
    );
};

export default HeaderBasket;