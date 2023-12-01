import React, { FC } from 'react';
import Logo from "../../../container/icons/Logo";

const AllProductBanner: FC = () => {

    const collectionInner = [
        {
            image: '/img/png/banner3.png'
        }
    ]

    return (
        <div className="shop-product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop-product-info">
                            {collectionInner.map((list, idx) => (
                                <div style={ {backgroundImage: `url(${ list.image })`} } className="shop-product-info-wrap"
                                     key={`all-product-info-${idx}`}
                                >
                                    <div className="col-lg-5 col-sm-3 col-1"></div>
                                    <div className="col-md-7 col-12">
                                        <div className="shop-product-info-wrap-text">
                                            <h2>product</h2>
                                            <p>Здесь вы можете просматривать товары данного магазина.</p>
                                        </div>
                                    </div>
                                    <div className="shop-product-info-wrap-svg">
                                        <Logo color={'#AC1931'} width={47}/>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductBanner;