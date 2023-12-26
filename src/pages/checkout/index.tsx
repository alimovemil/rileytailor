import React, { FC, useEffect, useRef, useState } from 'react';
import Header from "../header";
import Product from "../products";
import Location from "../../container/icons/location";
import TextField from "../../components/form/TextField";
import TextArea from "../../components/form/TextArea";
import { useLocation, useNavigate, } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetCauldrons,} from "../../redux/reducers/basket/basketRe";
import Footer from "../footer";
import Button from "../../components/form/Button";
import NavBarBottom from "../../components/sidebar/NavBarBottom";
import { useAppDispatch } from "../../redux/store";
import HeaderOpen from "../../components/header/headerOpen";
import { IMask } from "react-imask";
import { useForm } from "react-hook-form";

const CheckOut: FC = () => {
    const products = useSelector(GetCauldrons);
    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    const dispatch = useAppDispatch()

    const { handleSubmit, register, setValue, clearErrors, formState } = useForm();
    const { errors, isValid } = formState;


    const [ selectedItem, setSelectedItem ] = useState('');

    const handleSelectChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedItem(event.target.value);

        setShowAdditionalElements(event.target.value === 'Ташкент');
    };

    const [ showAdditionalElements, setShowAdditionalElements ] = useState(true);
    const [ selectedOption, setSelectedOption ] = useState('Самовывоз');
    const [ isPayment, setIsPayment ] = useState<any[]>([]);

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
    }, [ init ]);

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
    ]);

    const [ Comment, setComment ] = useState([
        {
            name: 'Район',
            key: 'region',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            value: '',
            field: true,
        },
        {
            name: 'Улица',
            key: 'street',
            className: 'form-content',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            field: true,
        },
        {
            name: 'Дом',
            key: 'house1',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            field: true
        },
        {
            name: 'Квартира',
            key: 'apartment',
            className: 'form-content',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            field: true
        },
        {
            area: true,
            comment: 'Комментарии',
            key: 'area',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            field: false,
            value: '',
            classArea: 'class'
        }
    ])

    const onChangeSetValue = (value: string, key: string) => {
        const listUpdate = [ ...delivery ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        setDelivery(listUpdate);
    }

    const onChangeSetValues = (value: string, key: string) => {
        const listUpdate = [ ...Comment ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        setComment(listUpdate);
    }

    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            const mask = IMask(inputRef.current, {
                mask: '+998 0 000 00 00'
            });
        }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        init();
    }, [ init, products ]);

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

    // const onClickPayment = async (totalPrice: number) => {
    //     const newOrderNumber = editedData?.orderNumber + 1 || 1;
    //     await dispatch(setCurrentOrder({orderNumber: newOrderNumber}));
    //     // window.open("https://my.click.uz", "_blank");
    //     const hasErrors = Object.keys(errors).length > 0;
    //
    //     if (hasErrors) {}
    // }

    const [ valuePhone, setValuePhone ] = useState('');

    const [ isHeaderOpenVisible, setHeaderOpenVisible ] = useState(false);
    const onSubmitSuccess = (data: any) => {
        console.log("Успешно отправлено:", data);
    };

    const onSubmit = handleSubmit(onSubmitSuccess);

    function onClickAcc() {
        setHeaderOpenVisible(true)
    }

    const onClickNext = () => {

    }

    return (
        <div>
            <Header isCheckoutPage={ true }/>
            <div className="content admin-header">
                <Product isCheckoutProduct={ true }/>
                <HeaderOpen isShow={ isHeaderOpenVisible } setIsShow={ () => setHeaderOpenVisible(false) }/>
                <div className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <form className="checkout-block">
                                    <div className="checkout-block-delivery-info">
                                        { selectedOption === "Самовывоз" ? (
                                            <div className="checkout-block-delivery-info-meta">
                                                <div className="checkout-block-goods-top-header">
                                                    <h1>Оформление заказа</h1>
                                                </div>
                                                <div className="checkout-block-goods-top-line"/>
                                                <div className="checkout-block-delivery-info-tell">
                                                    { delivery.map((item, idx) => (
                                                        <div className="checkout-block-delivery-info-tell-input"
                                                             key={ idx }>
                                                            <label>{ item.text }</label>
                                                            <TextField
                                                                value={ item.value || '' }
                                                                className={ 'checkout-block-delivery-info-tell-input-style' }
                                                                onChangeValue={ (value) => {
                                                                    item.setValue(value, item.key);
                                                                    clearErrors(item.key);
                                                                } }
                                                                { ...register(item.key, {required: !item.value}) }
                                                            />

                                                            { errors[item.key] && <span className="validation">Обязательное поле</span> }
                                                        </div>
                                                    )) }
                                                    <div className="checkout-block-delivery-info-tell-phone">
                                                        <label>Мобильный телефон</label>
                                                        <input
                                                            className="form-control"
                                                            placeholder={'+998'}
                                                            {...register('logins', { required: true })}
                                                            value={valuePhone}
                                                            onChange={(e) => {
                                                                setValuePhone(e.target.value);
                                                                clearErrors('logins');
                                                            }}
                                                            onPaste={(e) => {
                                                                setValuePhone(e.clipboardData.getData('Text'));
                                                                clearErrors('logins');
                                                            }}
                                                            type="text"
                                                            name="logins"
                                                        />
                                                        {errors.logins && <span className="validation">Обязательное поле</span>}
                                                    </div>
                                                </div>
                                                <Button text={ 'Продолжить' } onClick={ onClickNext }
                                                        className={ 'btn' }
                                                        type={ "button" }
                                                />
                                                <Button text={ 'Войти' } onClick={ onClickAcc }
                                                        className={ 'btn btn-meta' }/>
                                            </div>
                                        ) : null }

                                    </div>
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
                                                        <div className={ `${ item.class }` }>
                                                            { item.rate }
                                                        </div>
                                                        <img src={ item.img } alt=""/>
                                                    </div>
                                                    <div className="checkout-block-goods-top-cauldrons-inner">
                                                        <p>{ item.text }</p>
                                                        <h5>{ item.count } ед</h5>
                                                        <div
                                                            className={ `checkout-block-goods-top-cauldrons-inner-span ${ item.className }` }>
                                                            <h5>{ item.paragraph }</h5>
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
                                                            <div className={ `checkout-block-delivery-select-meta-comment-inner ${item.classArea}` }
                                                                key={ idx }>
                                                                { (item.field && (
                                                                    <>
                                                                        <label>{ item.name }</label>
                                                                        <TextField
                                                                            value={ item.value }
                                                                            onChangeValue={ (value) => {
                                                                                item.setValue(value, item.key);
                                                                                clearErrors(item.key);
                                                                            } }
                                                                            { ...register(item.key, {required: !item.value}) }
                                                                            type="text"
                                                                        />
                                                                        { errors[item.key] &&
                                                                        <span className="validation">Обязательное поле</span> }
                                                                    </>
                                                                )) }

                                                                { (item.area && (
                                                                    <div className="checkout-block-delivery-select-meta-comment-area">
                                                                        <TextArea
                                                                            value={ item.value }
                                                                            label={ item.comment }
                                                                            rows={ 4 }
                                                                            onChangeValue={ (value) => {
                                                                                item.setValue(value, item.key);
                                                                                clearErrors(item.key);
                                                                            } }
                                                                            { ...register(item.key, {required: !item.value}) }
                                                                        />
                                                                        { errors[item.key] &&
                                                                        <span className="validation">Обязательное поле</span> }
                                                                    </div>
                                                                )) }
                                                            </div>
                                                        )) }
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
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                                                <a href="#"><img src={ process.env.PUBLIC_URL + "/img/png/click.png" }
                                                                 alt=""/></a>
                                            </div>
                                            <div className="checkout-block-pay-item-meta">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                                                <a href="#"><img src={ process.env.PUBLIC_URL + "/img/png/payme.png" }
                                                                 alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>

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
                                            <span>{ productsSum.toLocaleString('ru-RU') } UZS</span>
                                        </div>
                                        <div className="checkout-total-amount-outcome">
                                            <p>Доставка</p>
                                            <span>{ deliveryCost.toLocaleString('ru-RU') } UZS</span>
                                        </div>
                                    </div>

                                    <div className="checkout-block-goods-top-line"/>

                                    <div className="checkout-total-inner">
                                        <p>К оплате</p>
                                        <div className="checkout-total-inner-span">
                                            <span>{ totalSumWithoutDelivery.toLocaleString('ru-RU') }</span>
                                            <div className="checkout-total-inner-span-uzs">UZS</div>
                                        </div>
                                    </div>

                                    <div className="checkout-block-goods-top-line"/>

                                    <div className="checkout-total-btn">
                                        <Button
                                            text={'Подтвердить заказ и оплатить'}
                                            onClick={onSubmit}
                                            className="btn"
                                            disabled={!isValid}
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