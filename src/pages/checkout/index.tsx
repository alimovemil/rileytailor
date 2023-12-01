import React, { FC, useEffect, useRef, useState } from 'react';
import Header from "../header";
import Product from "../products";
import Location from "../../container/icons/location";
import TextField from "../../components/form/TextField";
import TextArea from "../../components/form/TextArea";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetCauldrons } from "../../redux/reducers/basket/reducer";
import Footer from "../footer";
import Button from "../../components/form/Button";
import NavBarBottom from "../../components/sidebar/NavBarBottom";

const CheckOut: FC = () => {
    const products = useSelector(GetCauldrons);

    const navigate = useNavigate()

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    console.log(GetCauldrons)


    const [ selectedItem, setSelectedItem ] = useState('');

    const handleSelectChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedItem(event.target.value);

        setShowAdditionalElements(event.target.value === 'Ташкент');
    };

    const [ showAdditionalElements, setShowAdditionalElements ] = useState(true);
    const [ selectedOption, setSelectedOption ] = useState('Самовывоз');
    const [ isPayment, setPayment ] = useState<any[]>([]);

    useEffect(() => {
        if (selectedItem === 'Чирчик' || selectedItem === 'Янгиюль' || selectedItem === 'Фергана') {
            setSelectedOption('Курьерская доставка')
        } else {
            setSelectedOption('Самовывоз')
        }
    }, [ selectedItem ]);

    useEffect(() => {
        init();
    }, []);


    const [ delivery, setDelivery ] = useState<any[]>([
        {
            text: 'Имя',
        },
        {
            text: 'Фамилия'
        },
        {
            text: 'Мобильный Телефон'
        }
    ]);

    const Comment = [
        {
            name: 'Район',
            key: '',

        },
        {
            name: 'Улица',
            key: '',
            className: 'form-content'
        },
        {
            name: 'Дом',
            key: ''
        },
        {
            name: 'Квартира',
            key: '',
            className: 'form-content'
        },
    ];

    function init() {
        if (products) {
            // @ts-ignore
            setPayment(products);
        }
    };

    function onChangeValue(event: any) {
        setSelectedOption(event.target.value);
    }

    function onClickPayment() {
        navigate('')
    }

    return (
        <div>
            <Header/>
            <div className="content admin-header">
                <Product/>

                <div className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-12">
                                <div className="checkout-block">
                                    <div className="checkout-block-goods">
                                        <div className="checkout-block-goods-top">
                                            <div className="checkout-block-goods-top-header">
                                                <h1>Товары</h1>
                                            </div>

                                            <div className="checkout-block-goods-top-line"></div>
                                            { isPayment.map((item, idx) => (
                                                <div className="checkout-block-goods-top-cauldrons"
                                                     key={ `payment-checkout-${ idx }` }
                                                >
                                                    <div className="checkout-block-goods-top-cauldrons-img">
                                                        <img src={ item.img } alt=""/>
                                                    </div>
                                                    <div className="checkout-block-goods-top-cauldrons-inner">
                                                        <p>{ item.text }</p>
                                                        <h5>{ item.count } ед</h5>
                                                        <span>{ item.price }</span>
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                    <form className="checkout-block-delivery">
                                        <div className="checkout-block-goods-top-header">
                                            <h1>Доставка</h1>
                                        </div>
                                        <div className="checkout-block-goods-top-line"></div>

                                        <div className="checkout-block-delivery-info">
                                            <div className="checkout-block-delivery-info-tell">
                                                { delivery.map((item, idx) => (
                                                    <div className="checkout-block-delivery-info-tell-input">
                                                        <label>{ item.text }</label>
                                                        <TextField
                                                            value={ '' }
                                                            className={ 'checkout-block-delivery-info-tell-input-style' }
                                                        />
                                                    </div>
                                                )) }
                                            </div>
                                            {/*<label>Мобильный телефон</label>*/ }
                                            {/*<TextField*/ }
                                            {/*    value={ '' }*/ }
                                            {/*    className="checkout-block-delivery-info-field"*/ }
                                            {/*/>*/ }
                                        </div>
                                        <div className="checkout-block-delivery-select">
                                            <div className="checkout-block-delivery-select-dropdown">
                                                <p>Ваш город</p>
                                                <div className="checkout-block-delivery-select-dropdown-bottom">
                                                    <select
                                                        className="checkout-block-delivery-select-dropdown-bottom-toggle"
                                                        onChange={ handleSelectChange }
                                                        value={ selectedItem }
                                                    >
                                                        <option value="Ташкент">Ташкент</option>
                                                        <option value="Чирчик">Чирчик</option>
                                                        <option value="Янгиюль">Янгиюль</option>
                                                        <option value="Фергана">Фергана</option>
                                                    </select>
                                                    <Location color={ '#1E2546' }/>
                                                </div>
                                            </div>

                                            { showAdditionalElements && (
                                                <div className="checkout-block-delivery-select-content">
                                                    <div className="checkout-block-delivery-select-content-bottom">
                                                        <div
                                                            className="checkout-block-delivery-select-content-bottom-checkbox">
                                                            <div
                                                                className="checkout-block-delivery-select-content-bottom-checkbox-input">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="Самовывоз"
                                                                        checked={ selectedOption === "Самовывоз" }
                                                                        onChange={ onChangeValue }
                                                                    />
                                                                    Самовывоз
                                                                </label>
                                                            </div>
                                                            <p>Бесплатно</p>
                                                        </div>

                                                        { (selectedOption === "Самовывоз") && (
                                                            <div
                                                                className="checkout-block-delivery-select-content-bottom-point">
                                                                <label>Пункт выдачи</label>
                                                                <div
                                                                    className="checkout-block-delivery-select-content-bottom-point-option">
                                                                    <select>
                                                                        <option value="Выберите пункт доставки" selected
                                                                                style={ {display: "none"} }>Выберите
                                                                            пункт
                                                                            доставки
                                                                        </option>
                                                                        <option value="R&T Чиланзар, Чиланзарский район, улица
                                                                    Катартал, ТРЦ Parus">R&T Чиланзар, Чиланзарский
                                                                            район,
                                                                            улица
                                                                            Катартал, ТРЦ "Parus"
                                                                        </option>
                                                                        <option value="">R&T Мирабад, Мирабадский район,
                                                                            улица
                                                                            Адылходжаева, дом 112
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div
                                                                    className="checkout-block-delivery-select-content-bottom-point-paragraph">
                                                                    <p>График работы</p>
                                                                    <p>Пн-Пт, с 09:00 до 18:00. Обед с 13:00 до
                                                                        14:00</p>
                                                                </div>
                                                            </div>
                                                        ) }
                                                    </div>
                                                </div>
                                            ) }

                                            <div className="checkout-block-delivery-select-meta">
                                                <div className="checkout-block-delivery-select-meta-checkbox">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            value="Курьерская доставка"
                                                            checked={ selectedOption === "Курьерская доставка" }
                                                            onChange={ onChangeValue }
                                                            className='ds'
                                                        />
                                                        Курьерская доставка
                                                    </label>
                                                </div>
                                                { (selectedOption === "Курьерская доставка") && (
                                                    <div className="checkout-block-delivery-select-meta-comment">
                                                        { Comment.map((item, idx) => (
                                                            <div
                                                                className={ `checkout-block-delivery-select-meta-comment-inner` }
                                                                key={ idx }
                                                            >
                                                                <label>{ item.name }</label>
                                                                <TextField
                                                                    value={ '' }
                                                                />
                                                            </div>
                                                        )) }
                                                        <div
                                                            className="checkout-block-delivery-select-meta-comment-area">
                                                            <TextArea
                                                                value={ '' }
                                                                label={ 'Комментарии' }
                                                                rows={ 4 }
                                                            />
                                                        </div>
                                                    </div>
                                                ) }
                                            </div>
                                        </div>
                                    </form>
                                    <div className="checkout-block-pay">
                                        <div className="checkout-block-goods-top-header">
                                            <h1>Оплата</h1>
                                        </div>
                                        <div className="checkout-block-goods-top-line"></div>
                                        <div className="checkout-block-pay-item">
                                            <div className="checkout-block-pay-item-meta">
                                                <a href="#"><img src="/img/png/click.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="checkout-total">
                                    <div className="checkout-total-header">
                                        <h2>Итого</h2>
                                    </div>
                                    <div className="checkout-block-goods-top-line"></div>
                                    <div className="checkout-total-amount">
                                        <div className="checkout-total-amount-outcome">
                                            <p>Товар на сумму</p>
                                            <span>1 205 000 UZS</span>
                                        </div>
                                        <div className="checkout-total-amount-outcome">
                                            <p>Доставка</p>
                                            <span>30 000 UZS</span>
                                        </div>
                                    </div>

                                    <div className="checkout-block-goods-top-line"></div>

                                    <div className="checkout-total-inner">
                                        <p>К оплате</p>
                                        <div className="checkout-total-inner-span">
                                            <span>1 205 000</span>
                                            <div className="checkout-total-inner-span-uzs">UZS</div>
                                        </div>
                                    </div>

                                    <div className="checkout-block-goods-top-line"></div>

                                    <div className="checkout-total-btn">
                                        <Button text={ 'Подтвердить заказ и оплатить' }
                                                onClick={ onClickPayment }
                                                className="btn"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer/>
                <NavBarBottom/>
            </div>
        </div>
    );
};

export default CheckOut;