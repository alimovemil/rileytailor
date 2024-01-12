import React, { FC, useState } from 'react';
import ArrowBottom from "../../../container/icons/ArrowBottom";

const OrderContent: FC = () => {

    const [ isOrder, setIsOrder ] = useState<any[]>([
        {
            header: '25.05.2023',
            number: '№ 230501-0006',
            info: [
                {
                    span: 'Пользователь',
                    paragraph: 'Куприянов В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '500',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '2',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 270401-0007',
            info: [
                {
                    span: 'Пользователь',
                    paragraph: 'Смирнов В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '400',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '7',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 220421-0007',
            info: [
                {
                    span: 'Пользователь',
                    paragraph: 'Бочков В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '800',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '9',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 290231-0001',
            info: [
                {
                    span: 'Пользователь',
                    paragraph: 'Цветков В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '124',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '2',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 422410-0005',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Админов В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '123',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '11',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 122410-0005',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Басков В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '101',
                    className: 'classes',
                },
                {
                    span: 'Кол-во',
                    paragraph: '15',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 122410-0005',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Алиев В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '25.05.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '199',
                    className: 'classes'
                },
                {
                    span: 'Кол-во',
                    paragraph: '117',
                    className: 'class-span',
                }
            ]
        },
        {
            header: '21.04.2023',
            number: '№ 111410-0001',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Почков В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '21.04.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '119',
                    className: 'classes'
                },
                {
                    span: 'Кол-во',
                    paragraph: '193',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 122410-0005',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Крылов В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '21.04.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '199',
                    className: 'classes'
                },
                {
                    span: 'Кол-во',
                    paragraph: '117',
                    className: 'class-span',
                }
            ]
        },
        {
            number: '№ 127130-1005',
            info: [
                {
                    point: 'point',
                    span: 'Пользователь',
                    paragraph: 'Петров В.В.',
                    className: 'classname',
                },
                {
                    span: 'Дата',
                    paragraph: '21.04.2023',
                    className: 'class',
                },
                {
                    span: 'Общая сумма',
                    paragraph: '171',
                    className: 'classes'
                },
                {
                    span: 'Кол-во',
                    paragraph: '99',
                    className: 'class-span',
                }
            ]
        }
    ])

    return (
        <div className="order-content-item">
            { isOrder.map((item, idx) => (
                <div className="order-content-item-inner"
                     key={ `order-content-item-inner${ idx }` }
                >
                    <h2>{ item.header }</h2>
                    <div className="order-content-item-inner-info">
                        <div className="order-content-item-inner-info-number">
                            <h3 className={ item.point }>{ item.number }</h3>
                        </div>
                        <div className="order-content-item-inner-info-all">
                            { item.info.map((list: any, index: number) => (
                                <div className={ `order-content-item-inner-info-all-meta ${list.className}` }
                                     key={ `order-content-item-inner-info-all-meta-${ index }` }
                                >

                                    <span>{ list.span }</span>
                                    <p>{ list.paragraph }</p>
                                </div>
                            )) }
                        </div>
                        <div className="order-content-item-inner-info-arrow">
                            <div>Новый</div>
                            <ArrowBottom color={ '#003166' }/>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default OrderContent;