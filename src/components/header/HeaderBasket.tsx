import React, { FC, useEffect, useState } from 'react';
import DialogRightByContent from "../dialog/DialogRightByContent";
import Close from "../../container/icons/Close";
import Button from "../form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CauldronsSave, cauldronsSlices, GetCauldrons } from "../../redux/basket/basketRe";
import { useAppDispatch } from "../../redux/store";

interface HeaderOpenModal {
    isOpen: boolean
    setIsOpen: () => void
}

const HeaderBasket: FC<HeaderOpenModal> = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const products = useSelector(GetCauldrons);

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    const dispatch = useAppDispatch();

    const [cartDialogs, setCartDialog] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        init();
    }, [products]);

    function init() {
        if (products) {
            // @ts-ignore
            setCartDialog(products);
            calculateTotalPrice(products);
        }
    }

    function calculateTotalPrice(items: any[]) {
        const total = items.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price.replace(/[^0-9]/g, ''));
            return acc + itemPrice * parseInt(item.count);
        }, 0);

        setTotalPrice(total.toLocaleString('ru-RU'));
    }

    function onClickMinus(item: any) {
        dispatch(cauldronsSlices(item));
        setCartDialog((prevState) =>
            prevState.map((cartItem: any) =>
                cartItem.id === item.id && cartItem.number > 1
                    ? { ...cartItem, number: cartItem.number - 1 }
                    : cartItem
            )
        );
        calculateTotalPrice(cartDialogs);
    }

    function onClickPlus(item: any) {
        dispatch(CauldronsSave(item));
        setCartDialog((prevState) =>
            prevState.map((cartItem: any) =>
                cartItem.id === item.id
                    ? { ...cartItem, number: cartItem.number + 1 }
                    : cartItem
            )
        );
        calculateTotalPrice(cartDialogs);
    }

    function onClickPayment(price: number) {
        navigate('/checkout');
    }

    return (
        <DialogRightByContent
            isOpen={isOpen}
            closeModal={() => {
                setIsOpen();
            }}
            closeIcon={<Close />}
            label={'Корзина'}
        >
            <div className="header-top-cart">
                <div className="header-top-cart-block">
                    {cartDialogs.map((item, idx) => (
                        <div className="header-top-cart-block-item" key={`basket-product-item-${idx}`}>
                            <div className="header-top-cart-block-item-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="header-top-cart-block-item-info">
                                <div className="header-top-cart-block-item-info-number">
                                    <div className="header-top-cart-block-item-info-number-quantity">
                                        <p className="header-top-cart-block-item-info-number-quantity-p">{item.text}</p>
                                        <div className="header-top-cart-block-item-info-number-quantity-span">
                                            <span>{item.paragraph}</span>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="header-top-cart-block-item-info-number-value">
                                        <div className="header-top-cart-block-item-info-number-value-btn">
                                            <Button text={'-'} onClick={() => onClickMinus(item)} className="btn" />
                                            <span>{item.count}</span>
                                            <Button text={'+'} onClick={() => onClickPlus(item)} className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="header-top-cart-bottom">
                    <div className="header-top-cart-bottom-total">
                        <span>{totalPrice} UZS</span>
                    </div>
                    <Button text={'Оформить заказ'} onClick={() => onClickPayment(totalPrice)} className={'btn'} />
                </div>
            </div>
        </DialogRightByContent>
    );
};

export default HeaderBasket;
