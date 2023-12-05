import React, { FC, useState } from 'react';
import Calculator from "../../container/icons/Сalculator";
import Search from "../../container/icons/Search";
import Basket from "../../container/icons/Basket";
import Person from "../../container/icons/Person";
import HeaderBasket from "../header/HeaderBasket";
import { CSSTransition } from "react-transition-group";
import HeaderOpen from "../header/headerOpen";

const NavBarBottom: FC = () => {

    const [ isDialog, SetIsDialog ] = useState(false)

    const [ isModal, setIsModal ] = useState(false);

    const [ navbar, setNavBar ] = useState<any[]>([
        {
            key: '',
            navbar: <Calculator color={ '#000000' }/>,
            links: '/'
        },
        {
            key: '',
            navbar: <Search color={ '#000000' }/>,
            // links: ''
        },
        {
            key: '',
            navbar: <Basket color={ '#000000' }/>,
            OnClick: onClickDialog
        },
        {
            key: '',
            navbar: <Person color={ '#000000' }/>,
            OnClick: onClickDialogs
        },
    ])

    function onClickDialog() {
        SetIsDialog(true)
    }

    function onClickDialogs() {
        setIsModal(true)
    }

    return (
        <div className="navbar">
            <div className="navbar-item">
                <div className="navbar-menu">
                    { navbar.map((item, idx) => (
                        <a href={ item.links }
                           key={ idx }
                           onClick={ item.OnClick }
                        >
                            <div>{ item.navbar }</div>
                        </a>
                    )) }
                </div>
            </div>

            <CSSTransition
                in={ isDialog }
                timeout={ 200 }
                classNames="z"
                unmountOnExit
            >
                <HeaderBasket
                    isOpen={ isDialog }
                    setIsOpen={ () => {
                        SetIsDialog(false)
                    } }
                />
            </CSSTransition>

            <HeaderOpen
                setIsShow={ () => {
                    setIsModal(false)
                } }
                isShow={ isModal }
            />
        </div>
    );
};

export default NavBarBottom;