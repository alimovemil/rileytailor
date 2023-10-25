import React, { FC } from 'react';
import Header from "../../container/header";
import Product from "../../container/products";
import Carousel from "../../container/carousel";
import Collection from "../../container/collection";
import Client from "../../container/client";
import Banner from "../../container/banner";
import Partners from "../../container/partners";
import Advantage from "../../container/advantage";
import Footer from "../../container/footer";
import NavBarBottom from "../sidebar/NavBarBottom";

const RileyHeader: FC = () => {

    return (
        <div className="admin-header">
            <Header/>

            <Product/>

            <Carousel/>

            <Collection/>

            <Client/>

            <Banner/>

            <Partners/>

            <Advantage/>

            <Footer/>

            <NavBarBottom/>
        </div>
    );
};

export default RileyHeader;