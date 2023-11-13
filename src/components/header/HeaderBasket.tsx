import React, { FC, useEffect, useState } from 'react';
import DialogRightByContent from "../dialog/DialogRightByContent";
import Close from "../../container/icons/Close";
import Button from "../form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";

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

    const dispatch = useAppDispatch()

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    console.log(editedData)

    const [ cartDialogs, SetCartDialog ] = useState<any>({
        img: '/img/png/frying_1.png',
        money: '1000',
        span: '987 000 UZS',
        cost: 'Набор из 6 предм.Modern 103306',
        number: '1'
        // {
        //     img: '/img/png/frying_1.png',
        //         money: '1000',
        //     span: '50 UZS',
        //     cost: 'количествоdsdsds',
        //     number: '1'
        // },
        // {
        //     img: '/img/png/frying_1.png',
        //         money: '1000',
        //     span: '50 UZS',
        //     cost: 'количествовывыйвцй',
        //     number: '1'
        // },
    })


    useEffect(() => init(), [])

    function init() {
        SetCartDialog(editedData.item)
    }

    function onClickMinus() {
        navigate('/checkout')
    }

    function onClickCheckOut() {
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

                    <div className="header-top-cart-block-item"
                    >
                        <div className="header-top-cart-block-item-img">
                            <img src={ cartDialogs.img } alt=""/>
                        </div>
                        <div className="header-top-cart-block-item-info">
                            <div className="header-top-cart-block-item-info-number">
                                <div className="header-top-cart-block-item-info-number-quantity">
                                    <p className="header-top-cart-block-item-info-number-quantity-p">{ cartDialogs.cost }</p>
                                    <div className="header-top-cart-block-item-info-number-quantity-span">
                                        <span>{ cartDialogs.span }</span>
                                        <p>{ cartDialogs.money }</p>
                                    </div>
                                </div>
                                <div className="header-top-cart-block-item-info-number-value">
                                    <div className="header-top-cart-block-item-info-number-value-btn">
                                        <Button
                                            text={ '-' }
                                            onClick={ onClickCheckOut }
                                            className="btn"
                                        />
                                        <span>{ cartDialogs.number }</span>
                                        <Button
                                            text={ '+' }
                                            onClick={ onClickCheckOut }
                                            className="btn"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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