import React, { FC } from 'react';
import Carousel from "../carousel";
import Collection from "../collection";
import Client from "../client";
import Banner from "../banner";
import Partners from "../partners";
import Advantage from "../advantage";
import Footer from "../footer";
import NavBarBottom from "../../components/sidebar/NavBarBottom";
import Header from "../header";
import Product from "../products";

const Main: FC = () => {
    return (
        <div>
            <Header/>
            <div className="content">
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
        </div>
    );
};

export default Main;