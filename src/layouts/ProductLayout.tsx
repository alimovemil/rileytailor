import React, { FC } from 'react';
import Product from "../pages/products";
import Client from "../pages/client";
import Banner from "../pages/banner";
import Advantage from "../pages/advantage";
import Footer from "../pages/footer";
import Header from "../pages/header";
import { Outlet } from "react-router-dom";
import NavBarBottom from "../components/sidebar/NavBarBottom";

const ProductLayout: FC = () => {
    return (
        <>
            <Header/>
            <div className="content admin-header">
                <Product/>

                <Outlet/>

                <Client/>

                <Banner/>

                <Advantage/>

                <Footer/>

                <NavBarBottom/>
            </div>
        </>
    );
};

export default ProductLayout;