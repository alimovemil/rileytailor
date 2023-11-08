import React, { FC, useState } from 'react';

const Collection: FC = () => {

    const [ isCollection, SetIsCollection ] = useState<any[]>([
        {
            key: '',
            image: '/img/png/classic.png',
            text: 'Коллекция',
            name: 'Classic'
        },
        {
            key: '',
            image: '/img/png/loft.png',
            text: 'Коллекция',
            name: 'Loft'
        },
        {
            key: '',
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