import React, { FC } from 'react';
import Header from "../header";
import Product from "../products";
import Footer from "../footer";

const Payment: FC = () => {

    const payment = [
        {
            li: 'Курьерская доставка;'
        },
        {
            li: 'Вывоз из магазина.'
        },
    ]

    const payments = [
        {
            li: 'Ташкент — доставка производится в течение 48 часов по городу Ташкент. Стоимость доставки — 20.000 сум до дома.'
        },
        {
            li: 'Ташкентская область — доставка производится в течение 48 часов Стоимость доставки — 30.000 сум до дома.'
        },
        {
            li: 'Регионы — доставка товаров в регионы осуществляется в течение 1-5 дней в зависимости от города. Стоимость доставки — 30.000 сум до дома.'
        },
        {
            li: 'В случае, если покупатель подтвердил курьеру время доставки, но по какой-то причине отсутствует в назначенном месте, то курьер отвозит товар на склад, где он хранится от 1 до 3 суток. После того как покупатель вновь подтверждает время доставки, курьер доставляет товар, покупатель оплачивает компенсацию за хранение товара в размере 7.000 сум.'
        }
    ]

    const paymentSecond = [
        {
            li: 'Заказы, поступающие позже 16:00, доставляются на следующий день в порядке очереди. Операторы свяжутся с Вами для подтверждения заказа и для уточнения временного промежутка доставки.'
        }
    ]

    return (
        <div>
            <Header/>
            <div className="content">
                <Product/>
                <div className="payment">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="payment-item">
                                    <div className="payment-item-header">
                                        <h1>Оплата</h1>
                                    </div>
                                    <div className="payment-item-info">
                                        <div className="payment-item-info-list">
                                            <h3>Стоимость доставки и сроки зависят</h3>
                                            <ul>
                                                { payment.map((item, idx) => (
                                                    <li>{ item.li }</li>
                                                )) }
                                            </ul>
                                        </div>

                                        <div className="payment-item-info-list">
                                            <h3>Время доставки зависит от выбранного вами региона.</h3>
                                            <ul>
                                                { payments.map((item, idx) => (
                                                    <li>{ item.li }</li>
                                                )) }
                                            </ul>
                                        </div>

                                        <div className="payment-item-info-list">
                                            <h3>Уважаемый клиент, в случае курьерской доставки, пожалуйста, проверяйте
                                                целостность упаковки, наличие постороннего скотча и содержимое вашей
                                                посылки
                                                при
                                                курьере.</h3>
                                            <ul>
                                                { paymentSecond.map((item, idx) => (
                                                    <li>{ item.li }</li>
                                                )) }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Payment;