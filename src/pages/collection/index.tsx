import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";

const Collection: FC = () => {
    const navigate = useNavigate()

    const [ isCollection, SetIsCollection ] = useState<any[]>([
        {
            key: '',
            image: '/img/png/classic.png',
            text: 'Подробнее',
            name: 'Classic'
        },
        {
            key: '',
            image: '/img/png/loft.png',
            text: 'Подробнее',
            name: 'Loft'
        },
        {
            key: '',
            image: '/img/png/modern.png',
            text: 'Подробнее',
            name: 'Modern'
        },
    ])

    function OnClickPage() {
        navigate('')
    }


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
                        <div className="col-12 col-lg-6 col-type">
                            <div style={ {backgroundImage: `url(${ list.image })`} } className="collection-block"
                                 key={ idx }
                            >
                                <div className="collection-block-inner">
                                    <div className="collection-block-inner-text">
                                        <h3>{ list.name }</h3>
                                        <Button
                                            text={list.text}
                                            onClick={OnClickPage}
                                            className={'btn'}
                                        />
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