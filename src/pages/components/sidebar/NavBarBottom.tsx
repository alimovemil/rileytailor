import React, { FC, useState } from 'react';
import Calculator from "../../container/icons/Сalculator";
import Search from "../../container/icons/Search";
import Basket from "../../container/icons/Basket";
import Person from "../../container/icons/Person";

const NavBarBottom: FC = () => {
    const [navbar, setNavBar] = useState<any[]>([
        {
            key: '',
            navbar: <Calculator color={'#000000'}/>
        },
        {
            key: '',
            navbar: <Search color={'#000000'}/>
        },{
            key: '',
            navbar: <Basket color={'#000000'}/>
        },{
            key: '',
            navbar: <Person color={'#000000'}/>
        },


    ])

    return (
        <div className="navbar">
            <div className="navbar-item">
                <div className="navbar-menu">
                    {navbar.map((item, idx) => (
                        <a href="#"
                        key={idx}
                        >
                            <div>{item.navbar}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBarBottom;