import React, { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Collection: FC = () => {

    const navigate = useNavigate()

    const [ isCollection, SetIsCollection ] = useState<any[]>([
        {
            key: 'classic',
            image: '/img/png/ds.png',
            text: 'Коллекция',
            name: 'Classic'
        },
        {
            key: 'loft',
            image: '/img/png/loft.png',
            text: 'Коллекция',
            name: 'Loft'
        },
        {
            key: 'modern',
            image: '/img/png/modern.png',
            text: 'Коллекция',
            name: 'Modern'
        },
    ])

    return (
        <div className="collection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="collection-header">
                            <h1>Коллекции Riley & Tailor</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    { isCollection.map((list, idx) => (
                        <div className="col-12 col-lg-4 col-type">
                            <div style={ {backgroundImage: `url(${ list.image })`} } className="collection-block"
                                 key={ idx }
                                 onClick={() => navigate(`collection/${list.key}`, {
                                     state: {
                                         data: {
                                             item: list
                                         }
                                     }
                                 })}
                            >
                                <div className="collection-block-inner">
                                    <div className="collection-block-inner-text">
                                        <p>{ list.text }</p>
                                        <h3>{ list.name }</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Collection;