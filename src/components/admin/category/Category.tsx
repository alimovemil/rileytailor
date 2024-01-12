import React, { FC, useState } from 'react';
import Button from "../../../components/form/Button";
import Plus from "../../../container/icons/Plus";
import Pen from "../../../container/icons/Pen";
import CategoryNavigation from "../../../components/admin/category/CategoryNavigation";

const Category: FC = () => {

    const [ accessories, setAccessories ] = useState<any[]>([
        {
            img: '../img/png/cauldrons_1.png',
            key: 'accessories',
            span: 'Ресурсный источник',

        }
    ]);

    const [ isAccessories, isSetAccessories ] = useState<any[]>([
        {
            image: '../img/png/cauldrons_1.png',
            key: 'accessories1',
            spans: 'Аксессуары'
        },
        {
            image: '../img/png/cauldrons_1.png',
            key: 'accessories2',
            spans: 'Кастрюли'
        }
    ])

    return (
        <div className="category">
            <div className="category-header">
                <h1>Категории</h1>
            </div>
            <div className="category-block">
                <div className="category-block-inner">
                    <div className="category-block-inner-item">
                        <div className="category-block-inner-item-list">
                            <div className="category-block-inner-item-list-header">
                                <h3>Слайдер</h3>
                            </div>
                            <div className="category-block-inner-item-list-add">
                                <Button text={ <Plus color={ "#007BFF" }/> } className='btn-add'/>
                                <div className="category-block-inner-item-list-add-slide">
                                    <p>Добавить слайд</p>
                                    <span>1920x730 px, до 1 мб</span>
                                </div>
                            </div>
                        </div>
                        <div className="category-block-inner-item-meta">
                            { accessories.map((item, idx) => (
                                <div
                                    className="category-block-inner-item-meta-accessories"
                                    key={ `category-block-inner-item-accessories-${ idx }` }
                                >
                                    <div className="category-block-inner-item-meta-accessories-img">
                                        <img src={ item.img } alt=""/>
                                    </div>
                                    <p>{ item.span }</p>
                                    <Button text={ <Pen color={ '#007BFF' }/> } className="btn-slide"/>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className="category-block-inner-window">
                        <div className="category-block-inner-window-header">
                            <h3>Категории (главный экран)</h3>
                        </div>
                        <div className="category-block-inner-window-edit">
                            { isAccessories.map((list, idx) => (
                                <div className="category-block-inner-window-edit-screen" key={ `category-block-inner-window-edit-${ idx }` }>
                                    <div className="category-block-inner-window-edit-screen-image">
                                        <img src={ list.image } alt=""/>
                                    </div>
                                    <p>{ list.spans }</p>
                                    <Button text={ <Pen color={ '#007BFF' }/> } className="btn-screen"/>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                <CategoryNavigation/>
            </div>
        </div>
    );
};

export default Category;