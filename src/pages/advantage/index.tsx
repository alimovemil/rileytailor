import React, { FC, useState } from 'react';

const Advantage: FC = () => {
    const [ advantage, setAdvantage ] = useState<any[]>([
        {
            img: 'https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/deliver.svg',
            key: '',
            text: 'Бесплатная доставка',
            paragraph: 'Бесплатная доставка заказов от 1 000 000 сум по Узбекистану'
        },
        {
            img: 'https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/support.svg',
            key: '',
            text: 'Поддержка 24/7',
            paragraph: 'Консультант онлайн чата готов ответить на все ваши вопросы'
        },
        {
            img: 'https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/waranty.svg',
            key: '',
            text: 'Гарантия',
            paragraph: 'Предоставляем гарантийных 30 дней на обмен товара'
        },
        {
            img: 'https://rileytailor.uz/wp-content/themes/rt-theme/assets/img/pay.svg',
            key: '',
            text: 'Оплата',
            paragraph: 'Безопасная оплата банковскими картами'
        }
    ])

    return (
        <div className="advantage">
            <div className="container">
                <div className="row">
                    { advantage.map((item, idx) => (
                        <div className="col-6 col-md-3">
                            <div className="advantage-item"
                                 key={ idx }
                            >
                                <img src={ item.img } alt=""/>
                                <div className="advantage-text">
                                    <h5>{item.text}</h5>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Advantage;