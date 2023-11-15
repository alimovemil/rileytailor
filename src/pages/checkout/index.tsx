import React, { FC, useEffect, useRef, useState } from 'react';
import Header from "../header";
import Product from "../products";
import Location from "../../container/icons/location";
import TextField from "../../components/form/TextField";
import TextArea from "../../components/form/TextArea";

const CheckOut: FC = () => {

    const [ selectedItem, setSelectedItem ] = useState('');

    const handleSelectChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedItem(event.target.value);

        setShowAdditionalElements(event.target.value === 'Ташкент');
    };

    const [ showAdditionalElements, setShowAdditionalElements ] = useState(true);
    const [ selectedOption, setSelectedOption ] = useState('Самовывоз')

    useEffect(() => {
        if (selectedItem === 'Чирчик' || selectedItem === 'Янгиюль' || selectedItem === 'Фергана') {
            setSelectedOption('Курьерская доставка')
        } else {
            setSelectedOption('Самовывоз')
        }
    }, [ selectedItem ]);


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
    ]

    function onChangeValue(event: any) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <Header/>
            <div className="content">
                <Product/>

                <div className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <div className="checkout-block">
                                    <div className="checkout-block-goods">
                                        <div className="checkout-block-goods-top">
                                            <div className="checkout-block-goods-top-header">
                                                <h1>Товары</h1>
                                            </div>

                                            <div className="checkout-block-goods-top-line"></div>
                                            <div className="checkout-block-goods-top-cauldrons">
                                                <div className="checkout-block-goods-top-cauldrons-img">
                                                    <img src="/img/png/cauldrons_1.png" alt=""/>
                                                </div>
                                                <div className="checkout-block-goods-top-cauldrons-inner">
                                                    <p>Набор Riley&Tailor Modern 6 предметов: ковш 16см 1.9л; кастрюля
                                                        20см
                                                        3.6л; кастрюля 22см 4.7л (102306)"</p>
                                                    <h5>1 ед.</h5>
                                                    <span>212121 UZS</span>
                                                </div>
                                            </div>
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
                                                        <div className="checkout-block-delivery-select-meta-comment-area">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default CheckOut;