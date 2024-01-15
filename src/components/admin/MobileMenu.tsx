import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Burger from "../../container/icons/Burger";
import Dashboard from "../../container/icons/Dashboard";
import Category from "../../container/icons/Category";
import Property from "../../container/icons/Property";
import Warehouse from "../../container/icons/Warehouse";
import Orders from "../../container/icons/Orders";
import Setting from "../../container/icons/Setting";

interface MobileMenuProps {
    onClose: (is: boolean) => void
    isOpen: boolean
}

const MobileMenu: FC<MobileMenuProps> = ({onClose, isOpen}) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (window.innerWidth <= 768) onClose(false);
    }, [ location ])

    return (
        <div className="mobile__block">
            <div className="mobile__block__elem__block">
                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/dashboard") }>
                        <Dashboard/>
                        <p>Дашборд</p>
                    </a>
                </div>

                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/category") }>
                        <Category/>
                        <p>Категории</p>
                    </a>
                </div>

                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/property") }>
                        <Property/>
                        <p>Свойства</p>
                    </a>
                </div>

                <div className="mobile__block__burger" onClick={ () => onClose(!isOpen) }>
                    <Burger/>
                </div>

                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/warehouse") }>
                        <Warehouse/>
                        <p>Склад</p>
                    </a>
                </div>

                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/order") }>
                        <Orders size={ 20 }/>
                        <p>Склад</p>
                    </a>
                </div>

                <div className="mobile__block__menu">
                    <a onClick={ () => navigate("/admin/setting") }>
                        <Setting size={ 20 }/>
                        <p>Настройки</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
