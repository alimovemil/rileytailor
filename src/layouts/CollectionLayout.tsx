import React from 'react';
import Header from "../pages/header";
import Product from "../pages/products";
import { Outlet } from "react-router-dom";
import Client from "../pages/client";
import Banner from "../pages/banner";
import Advantage from "../pages/advantage";
import Footer from "../pages/footer";
import NavBarBottom from "../components/sidebar/NavBarBottom";
import CollectionPosition from "../pages/collection/CollectionPosition";
import CollectionBanner from "../pages/collection/CollectionBanner";
import CollectionSwiper from "../components/collection/CollectionSwiper";

const CollectionLayout = () => {
    return (
        <>
            <Header/>
            <div className="content-item admin-header">
                <Product/>

                <Outlet/>

                <CollectionPosition/>

                <CollectionBanner/>

                <CollectionSwiper/>

                <Client/>

                <Banner/>

                <Advantage/>

                <Footer/>

                <NavBarBottom/>
            </div>
        </>
    );
};

export default CollectionLayout;