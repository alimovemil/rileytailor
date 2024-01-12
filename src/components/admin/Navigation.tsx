import React, { FC } from 'react';
import NavItem from "../../components/NavItem";
import Dashboard from "../../container/icons/Dashboard";
import Category from "../../container/icons/Category";
import Property from "../../container/icons/Property";
import Warehouse from "../../container/icons/Warehouse";
import Orders from "../../container/icons/Orders";
import ArrowRight from "../../container/icons/Arrow-right";

const navigationItems = [
    {
        link: 'dashboard',
        icon: (<Dashboard color={"#003166"}/>),
        title: 'Дашборд',
        key: 'admin',
        img: <ArrowRight color={'#003166'}/>
    },
    {
        link: 'category',
        icon: (<Category color={"#003166"}/>),
        title: 'Категории',
        key: 'category',
        img: <ArrowRight color={'#003166'}/>
    },
    {
        link: 'property',
        icon: (<Property color={"#003166"}/>),
        title: 'Свойства',
        key: 'property',
        img: <ArrowRight color={'#003166'}/>
    },
    {
        link: 'warehouse',
        icon: (<Warehouse color={"#003166"}/>),
        title: 'Склад',
        key: 'warehouse',
        img: <ArrowRight color={'#003166'}/>
    },
    {
        link: 'order',
        icon: (<Orders color={"#003166"}/>),
        title: 'Заказы',
        key: 'order',
        img: <ArrowRight color={'#003166'}/>
    }
]


const Navigation: FC = () => {
    return (
        <>
            { navigationItems.map((item, index) => (
                <NavItem
                    key={ `nav-${ index }` }
                    link={ item.link }
                    icon={ item.icon }
                    title={ item.title }
                    img={item.img}
                />
            )) }
        </>
    );
};

export default Navigation;