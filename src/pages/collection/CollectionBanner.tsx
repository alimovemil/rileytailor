import React, { FC, useEffect, useState } from 'react';
import Logo from "../../container/icons/Logo";
import { useLocation } from "react-router-dom";

const CollectionBanner: FC = () => {

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data?.item || {};

    useEffect(() => {
        setIsCollection(editedData);
    }, [editedData]);

    const [isCollection, setIsCollection] = useState<any>({})

    const collectionInner = [
        {
            image: '/img/png/banner3.png'
        }
    ]

    return (
        <div className="collection-top-inner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="collection-top-inner-info">
                            {collectionInner.map((list, idx) => (
                                <div style={ {backgroundImage: `url(${ list.image })`} } className="collection-top-inner-info-wrap"
                                key={`collection-top-inner-info-${idx}`}
                                >
                                    <div className="col-lg-5 col-12 p-0 text-center">
                                        <img src="/img/png/ds.png" alt=""/>
                                    </div>
                                    <div className="col-lg-7 col-12">
                                        <div className="collection-top-inner-info-wrap-text">
                                            <h2>{isCollection.name}</h2>
                                            <p>Коллекция посуды Classic из нержавеющей стали зеркальной полировки будет гармонично
                                                смотреться на кухнях классического стиля, неокласики, которые всегда на пике
                                                популярности. Изделия имеют прямую цилиндрическую форму с удобным сливом жидкости и
                                                обозначениями литража и тройное капсульное дно, которое помогает теплое равномерно
                                                нагревать пищу. Удобные ручки из нержавеющей стали долго не нагреваются и соединены
                                                надежным креплением на заклепках. Крышки из термостойкого стекла с отверстием для
                                                выпуска пара имеют удобный широкий ободок для слива жидкости, который выполнит
                                                функцию дуршлага.</p>
                                        </div>
                                    </div>
                                    <div className="collection-top-inner-info-wrap-svg">
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

export default CollectionBanner;