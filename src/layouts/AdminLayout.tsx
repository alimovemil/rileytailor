import React, { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from "../components/admin/Navigation";
import Logo from "../container/icons/Logo";
import MobileMenu from "../components/admin/MobileMenu";

const AdminLayout: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = window.innerWidth < 767;
    const [ isShowOpen, setShowOpen ] = useState<any | boolean>(!!isMobile ? false : true);

    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(!!isMobile ? false : true);


    function onClickHome() {
        navigate('/');
    }

    useEffect(() => {
        const handleResize = () => {
            setShowOpen(window.innerWidth > 767);
        };

        window.addEventListener('pageshow', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('pageshow', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isCategoryOrPropertyPage = location.pathname.startsWith('/admin/') &&
        (location.pathname === '/admin/category' ||
            location.pathname === '/admin/property' ||
            location.pathname === '/admin/setting' ||
            location.pathname === '/admin/warehouse');

    const sidebarStyle = {
        height: isCategoryOrPropertyPage ? '100vh' : '100%',
    };

    return (
        <div className="sidebar" style={ sidebarStyle }>
            <div className={`sidebar-left ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-left-block" onClick={ onClickHome }>
                    <Logo color={ '#AC1931' } height={ 40 }/>
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

            <MobileMenu
                isOpen={isShowOpen}
                onClose={(is) => {
                    setShowOpen(is);
                    setSidebarOpen(is);
                }}
            />
        </div>
    );
};

export default AdminLayout;
