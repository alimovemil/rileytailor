import React, { FC } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from "../components/admin/Navigation";
import Logo from "../container/icons/Logo";

const AdminLayout: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function onClickHome() {
        navigate('/');
    }

    const isCategoryOrPropertyPage = location.pathname.startsWith('/admin/') &&
        (location.pathname === '/admin/category' ||
            location.pathname === '/admin/property' ||
            location.pathname === '/admin/order' ||
            location.pathname === '/admin/warehouse');

    const sidebarStyle = {
        height: isCategoryOrPropertyPage ? '100vh' : '100%',
    };

    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="sidebar-left">
                <div className="sidebar-left-block" onClick={onClickHome}>
                    <Logo color={'#AC1931'} height={30}/>
                </div>
                <Navigation/>

                <div className="sidebar-left-bottom">
                    <div className="sidebar-left-bottom-img">
                        <img src="../../img/png/cauldrons_2.png" alt=""/>
                    </div>
                    <p>Калик Абад</p>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;
