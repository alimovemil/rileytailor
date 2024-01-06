import React, { FC } from 'react';
import NavItem from "../../components/NavItem";
import Dashboard from "../../container/icons/Dashboard";

const navigationItems = [
    {
        link: 'dashboard',
        icon: (<Dashboard/>),
        title: 'Дашборд',
        key: 'dashboard'
    },
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
                />
            )) }
        </>
    );
};

export default Navigation;