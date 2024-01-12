import React, { FC, useState } from 'react';
import Button from "../../../components/form/Button";

const DashboardBottom: FC = () => {

    const initialVisibleItems = 5;
    const [showAll, setShowAll] = useState(false);
    const [showAllStates, setShowAllStates] = useState<any>({});

    const [ persons, setPersons ] = useState<any[]>([
        {
            title: 'Пользователи',
            key: 'person',
            span: '1784',
            users: [
                {
                    img: '../img/png/cauldrons_1.png',
                    text: 'Ильин Андрей',
                    order: '8 заказа',
                    key: 'names'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Алексеев Пётр',
                    order: '8 заказа',
                    key: 'names1'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Кудрявцев Андрей',
                    order: '6 заказа',
                    key: 'names2'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Андреев Юрий',
                    order: '5 заказа',
                    key: 'names3'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Смирнов Борис',
                    order: '5 заказа',
                    key: 'names4'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Виталик Борисов',
                    order: '3 заказа',
                    key: 'names5'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Виталик Админов',
                    order: '32 заказа',
                    key: 'names6'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Пушкин Админов',
                    order: '42 заказа',
                    key: 'names7'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Пушкины Систем',
                    order: '42 заказа',
                    key: 'names8'
                },
                {
                    img: '../img/png/avatar.png',
                    text: 'Килов Калаш',
                    order: '42 заказа',
                    key: 'names9'
                }
            ]
        },
        {
            title: 'Категории',
            key: 'categories',
            span: '10',
            users: [
                {
                    text: 'Верхняя одежда',
                    order: '30 товаров',
                    key: 'skin',
                    style: {display: 'none'}
                },
                {
                    text: 'Блокноты',
                    order: '26 товаров',
                    key: 'skin1',
                    style: {display: 'none'}
                },
                {
                    text: 'Футболки',
                    order: '22 товаров',
                    key: 'skin2',
                    style: {display: 'none'}
                },
                {
                    text: 'Обувь',
                    order: '18 товаров',
                    key: 'skin3',
                    style: {display: 'none'}
                },
                {
                    text: 'Магниты',
                    order: '10 товаров',
                    key: 'skin4',
                    style: {display: 'none'}
                },
                {
                    text: 'Шлепцы',
                    order: '15 товаров',
                    key: 'skin5',
                    style: {display: 'none'}
                },
                {
                    text: 'Кепка',
                    order: '45 товаров',
                    key: 'skin6',
                    style: {display: 'none'}
                },
                {
                    text: 'Кастрюля',
                    order: '45 товаров',
                    key: 'skin6',
                    style: {display: 'none'}
                },
            ]
        },
        {
            title: 'Склад',
            key: 'warehouse',
            span: '256',
            users: [
                {
                    text: '1094857',
                    key: 'warehouse1',
                    order: '30 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1094898',
                    key: 'warehouse2',
                    order: '26 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1094826',
                    key: 'warehouse3',
                    order: '22 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1094845',
                    key: 'warehouse4',
                    order: '18 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1094897',
                    key: 'warehouse5',
                    order: '10 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1094932',
                    key: 'warehouse6',
                    order: '12 товаров',
                    style: {display: 'none'}
                },
                {
                    text: '1099983',
                    key: 'warehouse6',
                    order: '84 товаров',
                    style: {display: 'none'}
                },
            ]
        }
    ])

    const toggleShowAll = (personIdx: number) => {
        setShowAllStates((prevShowAllStates: any[]) => ({
            ...prevShowAllStates,
            [personIdx]: !prevShowAllStates[personIdx]
        }));
    };

    return (
        <div className="sidebar-content-bottom">
            {persons.map((person, personIdx) => (
                <div className="sidebar-content-bottom-child" key={`person-${personIdx}`}>
                    <div className="sidebar-content-bottom-child-names">
                        <h3>{person.title}</h3>
                        <span>{person.span}</span>
                    </div>
                    <div className="sidebar-content-bottom-child-item">
                        {person.users.slice(0, showAllStates[personIdx] ? undefined : initialVisibleItems).map((user: any, userIdx: number) => (
                            <div key={`user-${userIdx}`} className="sidebar-content-bottom-child-item-inner">
                                <div style={user.style} className="sidebar-content-bottom-child-item-inner-img">
                                    <img src={user.img} alt="" />
                                </div>
                                <span>{user.text}</span>
                                <span className="sidebar-content-bottom-child-item-inner-meta">{user.order}</span>
                            </div>
                        ))}
                    </div>
                    <Button
                        text={showAllStates[personIdx] ? 'Скрыть' : 'Показать все'}
                        onClick={() => toggleShowAll(personIdx)}
                        className={'btn'}
                    />
                </div>
            ))}
        </div>
    );
};

export default DashboardBottom;
