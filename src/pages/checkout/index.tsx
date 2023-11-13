import React, { FC, useEffect, useRef, useState } from 'react';
import Header from "../header";
import Product from "../products";
import FilterSelect from "../../components/form/Select";
import Location from "../../container/icons/location";
import TextField from "../../components/form/TextField";

const CheckOut: FC = () => {

    const [selectedItem, setSelectedItem] = useState('');

    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedItem(event.target.value);
    };

    const [showAdditionalElements, setShowAdditionalElements] = useState(false);
    const [showAdditionalElement, setShowAdditionalElement] = useState(false);

    useEffect(() => {
        if (selectedItem === 'Ташкент') {
            setShowAdditionalElements(true);
        } else {
            setShowAdditionalElements(false);
        }

    }, [selectedItem]);

    useEffect(() => {
        if (selectedItem === 'Чирчик' || selectedItem === 'Янгиюль' || selectedItem === 'Фергана') {
            setShowAdditionalElement(true);
        } else {
            setShowAdditionalElement(false);
        }
    }, [selectedItem]);

    const [ delivery, setDelivery ] = useState<any[]>([
        {
            text: 'Имя',
        },
        {
            text: 'Фамилия'
        }
    ]);

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
                                                {delivery.map((item, idx) => (
                                                    <div className="checkout-block-delivery-info-input">
                                                        <div className="checkout-block-delivery-info-input-name">
                                                            <label>{item.text}</label>
                                                            <TextField
                                                                value={''}
                                                                className={'checkout-block-delivery-info-input-name-style'}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <label>Мобильный телефон</label>
                                            <TextField
                                                value={''}
                                                className="checkout-block-delivery-info-field"
                                            />
                                        </div>
                                        <div className="checkout-block-delivery-select">
                                            <div className="checkout-block-delivery-select-dropdown">
                                                <p>Ваш город</p>
                                                <div className="checkout-block-delivery-select-dropdown-bottom">
                                                    <select
                                                        className="checkout-block-delivery-select-dropdown-bottom-toggle"
                                                        onChange={handleSelectChange}
                                                        value={selectedItem}
                                                    >
                                                        <option value="Ташкент">Ташкент</option>
                                                        <option value="Чирчик">Чирчик</option>
                                                        <option value="Янгиюль">Янгиюль</option>
                                                        <option value="Фергана">Фергана</option>
                                                    </select>
                                                    <Location color={'#1E2546'}/>
                                                </div>
                                            </div>

                                            {showAdditionalElements && (
                                                <div className="checkout-block-delivery-info">
                                                    ы
                                                </div>
                                            )}

                                            {showAdditionalElement && (
                                                <div>dsds</div>
                                            )}
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