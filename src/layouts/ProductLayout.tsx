import React, { FC } from 'react';
import Product from "../pages/products";
import Client from "../pages/client";
import Banner from "../pages/banner";
import Advantage from "../pages/advantage";
import Footer from "../pages/footer";
import Header from "../pages/header";
import { Outlet } from "react-router-dom";

const ProductLayout: FC = () => {
    return (
        <div>
            <Header/>
            <div className="content">
                <Product/>

                <Outlet/>

                <Client/>

                <Banner/>

                <Advantage/>

                <Footer/>
            </div>
        </div>
    );
};

export default ProductLayout;