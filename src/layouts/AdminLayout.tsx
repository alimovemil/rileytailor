import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from "../components/dashboard/Navigation";

const AdminLayout: FC = () => {
    return (
        <div className="sidebar__list__item">
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;