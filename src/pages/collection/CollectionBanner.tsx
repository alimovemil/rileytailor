import React, { FC } from 'react';

const CollectionBanner: FC = () => {

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
                                    <div className="col-5 p-0">
                                        <img src="/img/png/ds.png" alt=""/>
                                    </div>
                                    <div className="col-7">
                                        <div className="collection-top-inner-info-wrap-text">
                                            <h2>Classic</h2>
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