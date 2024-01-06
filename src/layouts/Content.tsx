import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Product from "../pages/products";
import Client from "../pages/client";
import Banner from "../pages/banner";
import Advantage from "../pages/advantage";
import Footer from "../pages/footer";
import Modern from "../pages/banner/Modern";

const Content: FC = () => {
    return (
        <div className="admin-header">
            <Header/>
            <div className="content">
                <Product/>

                <Modern/>

                <Client/>

                <Banner/>

                <Advantage/>

                <Footer/>

                <Outlet/>

            </div>
        </div>
    );
};

export default Content;