import React, { FC, useEffect, useState } from 'react';
import DialogRightByContent from "../dialog/DialogRightByContent";
import Close from "../../container/icons/Close";
import Button from "../form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CauldronsSave, cauldronsSlices, GetCauldrons } from "../../redux/reducers/basket/reducer";
import { useAppDispatch } from "../../redux/store";

interface HeaderOpenModal {
    isOpen: boolean
    setIsOpen: () => void
}

const HeaderBasket: FC<HeaderOpenModal> = ({isOpen, setIsOpen}) => {
    const navigate = useNavigate();
    const products = useSelector(GetCauldrons);

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    console.log(editedData)

    const dispatch = useAppDispatch()

    const [ cartDialogs, setCartDialog ] = useState<any[]>([]);

    useEffect(() => {
        init();
    }, []);

    function init() {
        if (products) { // @ts-ignore
            setCartDialog(products);
        }
    }

    function onClickMinus(item: any) {
        dispatch(cauldronsSlices(item))
        // setCartDialog((prevState) => ({
        //     ...prevState,
        //     number: prevState.number > 0 ? prevState.number - 1 : 0,
        // }));
    }

    function onClickPlus(item: any) {
        dispatch(CauldronsSave(item))
        // setCartDialog((prevState) => ({
        //     ...prevState,
        //     number: prevState.number + 1,
        // }));
    }

    function onClickPayment() {
        navigate('/checkout');
    }

    console.log(cartDialogs)

    return (
        <DialogRightByContent
            isOpen={ isOpen }
            closeModal={ () => {
                setIsOpen();
            } }
            closeIcon={ <Close/> }
            label={ 'Корзина' }
        >
            <div className="header-top-cart">
                <div className="header-top-cart-block">
                    {cartDialogs.map((item, idx) => (
                        <div className="header-top-cart-block-item"
                        key={`basket-product-item-${idx}`}
                        >
                            <div className="header-top-cart-block-item-img">
                                <img src={ item.img } alt=""/>
                            </div>
                            <div className="header-top-cart-block-item-info">
                                <div className="header-top-cart-block-item-info-number">
                                    <div className="header-top-cart-block-item-info-number-quantity">
                                        <p className="header-top-cart-block-item-info-number-quantity-p">{ item.text }</p>
                                        <div className="header-top-cart-block-item-info-number-quantity-span">
                                            <span>{ item.paragraph }</span>
                                            <p>{ item.price }</p>
                                        </div>
                                    </div>
                                    <div className="header-top-cart-block-item-info-number-value">
                                        <div className="header-top-cart-block-item-info-number-value-btn">
                                            <Button text={ '-' } onClick={ () => onClickMinus(item) } className="btn"/>
                                            <span>{ item.count }</span>
                                            <Button text={ '+' } onClick={ () => onClickPlus(item) } className="btn"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="header-top-cart-bottom">
                    <div className="header-top-cart-bottom-total">
                        <span>43434343 UZS</span>
                    </div>
                    <Button text={ 'Оформить заказ' } onClick={ onClickPayment } className={ 'btn' }/>
                </div>
            </div>
        </DialogRightByContent>
    );
};

export default HeaderBasket;
