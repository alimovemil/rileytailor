import React, { FC, useState } from 'react';
import Header from "../header";
import Product from "../products";
import FilterSelect from "../../components/form/Select";
import Location from "../../container/icons/location";

const CheckOut: FC = () => {

    const [ delivery, setDelivery ] = useState<any[]>([]);

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
                                    <div className="checkout-block-delivery">
                                        <div className="checkout-block-goods-top-header">
                                            <h1>Товары</h1>
                                        </div>
                                        <div className="checkout-block-goods-top-line"></div>

                                        <FilterSelect
                                            className={ 'ds' }
                                            options={ delivery }
                                            placeholder={ 'ds' }
                                            onChange={ (val) => setDelivery(val) }
                                            imgLeft={<Location/>}
                                        />
                                    </div>
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