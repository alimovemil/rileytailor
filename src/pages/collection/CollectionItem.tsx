import React, { FC } from 'react';
import ArrowRight from "../../container/icons/Arrow-right";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import CollectionSwiper from "../../components/collection/CollectionSwiper";
import CollectionPosition from "../../pages/collection/CollectionPosition";
import CollectionBanner from "../../pages/collection/CollectionBanner";

const CollectionItem: FC = () => {

    const navigate = useNavigate()

    function onClickHome() {
        navigate('/')
    }

    return (
        <div className="collection-top">
            <div className="collection-top-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="collection-top-content-item">
                                <div className="collection-top-content-item-crossing">
                                    <Button text={'Главная'}
                                            onClick={onClickHome}
                                            className="btn"
                                    />

                                    <ArrowRight/>

                                    <h2>Classic</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CollectionPosition/>
            <CollectionBanner/>
            <CollectionSwiper/>
        </div>
    );
};

export default CollectionItem;