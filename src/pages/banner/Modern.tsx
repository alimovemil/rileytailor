import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";

const Modern: FC = () => {
    const navigate = useNavigate()

    const [ list, setList ] = useState<any[]>([
        {
            key: '',
            text: 'Материал',
            txt: 'Нержавеющая сталь'
        },
        {
            key: '',
            text: 'Материал ручек',
            txt: 'Нержавеющая сталь'
        },
        {
            key: '',
            text: 'Крышка',
            txt: 'Имеется'
        },
        {
            key: '',
            text: 'Кол-во предметов',
            txt: '8шт'
        },
    ])

    const [ isCauldrons, setIsCauldrons ] = useState<any[]>([
        {
            img: '/img/png/frying_2.png',
        },
        {
            img: '/img/png/frying_1.png',
        },
        {
            img: '/img/png/frying_1.png',
        }
    ])

    const [ isModern, setIsModern ] = useState<any[]>([
        {
            title: 'Набор из 8 предм.Modern 102308',
            paragraph: 'Артикул: 102308',
            i: 'Стоимость',
            meta: '987 000 UZS',
            span: 'Есть в наличии'
        },
    ])

    function onClickCheckOut() {
        navigate('')
    }

    return (
        <div className="modern">
            <div className="container">
                <div className="modern-item">
                    <div className="row">
                        <div className="col-12">
                            <div className="modern-item-style">
                                <div className="modern-item-style-left">
                                    <div className="modern-item-style-left-image">
                                        <img src="/img/png/modernsImg.png" alt=""/>
                                    </div>
                                </div>
                                <div className="modern-item-bottom-left">

                                    { isCauldrons.map((image, idx) => (
                                        <div className="modern-item-bottom-left-cauldrons"
                                             key={ idx }
                                        >
                                            <img src={ image.img } alt=""/>
                                        </div>
                                    )) }

                                </div>
                                <div className="modern-item-style-block">
                                    <div className="modern-item-style-block-inner">
                                        { isModern.map((block, idx) => (
                                            <div className="modern-item-style-block-name">
                                                <div className="modern-item-style-block-name-page">
                                                    <h3>{block.title}</h3>
                                                    <p>{block.paragraph}</p>
                                                </div>

                                                <div className="modern-item-style-block-name-cost">
                                                    <p>{block.i}</p>
                                                    <h4>{block.meta}</h4>
                                                    <span>{block.span}</span>
                                                </div>

                                                <div className="modern-item-style-block-btn">
                                                    <Button
                                                        text={ 'Добавить в корзину' }
                                                        onClick={ onClickCheckOut }
                                                        leftIcon={ <Basket/> }
                                                        className={ 'btn' }
                                                    />
                                                </div>
                                            </div>
                                        )) }
                                    </div>

                                    <div className="modern-item-bottom">

                                        <div className="modern-item-bottom-info">
                                            <div className="modern-item-bottom-info-header">
                                                <h3>Характеристики</h3>
                                            </div>

                                            <div className="modern-item-bottom-info-text">
                                                { list.map((item, idx) => (
                                                    <div className="modern-item-bottom-info-text-material">
                                                        <p>{ item.text }</p>
                                                        <div className="">........</div>
                                                        <span>{ item.txt }</span>
                                                    </div>
                                                )) }

                                            </div>
                                        </div>
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

export default Modern;