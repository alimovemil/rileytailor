import React, { FC } from 'react';
import Button from "../../form/Button";
import ArrowRight from "../../../container/icons/Arrow-right";
import { useNavigate } from "react-router-dom";
import AllProductBanner from "./AllProductBanner";
import AllProductPosition from "./AllProductPosition";
import CollectionSwiper from "../../collection/CollectionSwiper";


const AllProduct: FC = () => {

    const navigate = useNavigate()

    function onClickHome() {
        navigate('/pages')
    }

    return (
        <div className="shop">
            <div className="shop-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shop-top-item">
                                <div className="shop-top-item-crossing">
                                    <Button text={'Главная'}
                                            onClick={onClickHome}
                                            className="btn"
                                    />

                                    <ArrowRight/>

                                    <h2>product</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AllProductPosition/>
            <AllProductBanner/>
            <CollectionSwiper/>
        </div>
    );
};

export default AllProduct;