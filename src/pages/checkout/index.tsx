import React, { FC, useEffect, useState } from 'react';
import Header from "../header";
import Product from "../products";
import Location from "../../container/icons/location";
import TextField from "../../components/form/TextField";
import TextArea from "../../components/form/TextArea";
import { useLocation, } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetCauldrons, setCurrentOrder } from "../../redux/reducers/basket/basketRe";
import Footer from "../footer";
import Button from "../../components/form/Button";
import NavBarBottom from "../../components/sidebar/NavBarBottom";
import { useAppDispatch } from "../../redux/store";

const CheckOut: FC = () => {

    const products = useSelector(GetCauldrons);
    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    const dispatch = useAppDispatch()

    const [ selectedItem, setSelectedItem ] = useState('');

    const handleSelectChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedItem(event.target.value);

        setShowAdditionalElements(event.target.value === 'Ташкент');
    };

    const [ showAdditionalElements, setShowAdditionalElements ] = useState(true);
    const [ selectedOption, setSelectedOption ] = useState('Самовывоз');
    const [ isPayment, setIsPayment] = useState<any[]>([]);


    const getTotalProductsSum = (productsInBasket: any[]) => {
        return productsInBasket.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace(/\D/g, ''));
            return !isNaN(itemPrice) ? total + itemPrice * item.count : total;
        }, 0);
    };

    const deliveryCost = selectedOption === "Самовывоз" ? 0 : 30000;
    const productsSum = getTotalProductsSum(products);
    const totalSumWithoutDelivery = productsSum + deliveryCost;

    useEffect(() => {
        if (selectedItem === 'Чирчик' || selectedItem === 'Янгиюль' || selectedItem === 'Фергана') {
            setSelectedOption('Курьерская доставка')
        } else {
            setSelectedOption('Самовывоз')
        }
    }, [ selectedItem ]);

    useEffect(() => {
        init();
    }, [init]);


    const [ delivery, setDelivery ] = useState<any[]>([
        {
            text: 'Имя',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'name'
        },
        {
            text: 'Фамилия',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'surname'
        },
        {
            text: 'Мобильный Телефон',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'phone'
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

    const onChangeSetValue = (value: string, key: string) => {
        const listUpdate = [...delivery].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        setDelivery(listUpdate);
    }

    const [totalPrice, setTotalPrice] = useState<number>(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        init();
    }, [init, products]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function init() {
        if (products) {
            // @ts-ignore
            setIsPayment(products);
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

    function onChangeValue(event: any) {
        setSelectedOption(event.target.value);
    }

    const onClickPayment = async (totalPrice: number) => {
        const newOrderNumber = editedData?.orderNumber + 1 || 1;
        await dispatch(setCurrentOrder({ orderNumber: newOrderNumber }));
        window.open("https://my.click.uz", "_blank");
    };

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

                                            <div className="checkout-block-goods-top-line"/>
                                            { isPayment.map((item, idx) => (
                                                <div className="checkout-block-goods-top-cauldrons"
                                                     key={ `payment-checkout-${ idx }` }
                                                >
                                                    <div className="checkout-block-goods-top-cauldrons-img">
                                                        <div className={`${item.class}`}>
                                                            {item.rate}
                                                        </div>
                                                        <img src={ item.img } alt=""/>
                                                    </div>
                                                    <div className="checkout-block-goods-top-cauldrons-inner">
                                                        <p>{ item.text }</p>
                                                        <h5>{ item.count } ед</h5>
                                                        <div className={`checkout-block-goods-top-cauldrons-inner-span ${item.className}`}>
                                                            <h5>{item.paragraph}</h5>
                                                            <span>{ item.price }</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                    <form className="checkout-block-delivery">
                                        <div className="checkout-block-goods-top-header">
                                            <h1>Доставка</h1>
                                        </div>
                                        <div className="checkout-block-goods-top-line"/>

                                        <div className="checkout-block-delivery-info">
                                            <div className="checkout-block-delivery-info-tell">
                                                { delivery.map((item, idx) => (
                                                    <div className="checkout-block-delivery-info-tell-input"
                                                    key={idx}
                                                    >
                                                        <label>{ item.text }</label>
                                                        <TextField
                                                            value={ item.value || '' }
                                                            className={ 'checkout-block-delivery-info-tell-input-style' }
                                                            onChangeValue={ (value) => item.setValue(value, item.key) }
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
                                        <div className="checkout-block-goods-top-line"/>
                                        <div className="checkout-block-pay-item">
                                            <div className="checkout-block-pay-item-meta">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a href="#"><img src={process.env.PUBLIC_URL + "/img/png/click.png"} alt=""/></a>
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
                                    <div className="checkout-block-goods-top-line"/>
                                    <div className="checkout-total-amount">
                                        <div className="checkout-total-amount-outcome">
                                            <p>Товар на сумму</p>
                                            <span>{productsSum.toLocaleString('ru-RU')} UZS</span>
                                        </div>
                                        <div className="checkout-total-amount-outcome">
                                            <p>Доставка</p>
                                            <span>{deliveryCost.toLocaleString('ru-RU')} UZS</span>
                                        </div>
                                    </div>

                                    <div className="checkout-block-goods-top-line"/>

                                    <div className="checkout-total-inner">
                                        <p>К оплате</p>
                                        <div className="checkout-total-inner-span">
                                            <span>{totalSumWithoutDelivery.toLocaleString('ru-RU')}</span>
                                            <div className="checkout-total-inner-span-uzs">UZS</div>
                                        </div>
                                    </div>


                                    <div className="checkout-block-goods-top-line"/>

                                    <div className="checkout-total-btn">
                                        <Button text={ 'Подтвердить заказ и оплатить' }
                                                onClick={() => onClickPayment(totalPrice)}
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