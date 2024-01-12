import Button from '../../../components/form/Button';
import React, { FC, useState } from 'react';
import Plus from "../../../container/icons/Plus";
import Burger from "../../../container/icons/Burger";
import ArrowBottom from "../../../container/icons/ArrowBottom";
import Pen from "../../../container/icons/Pen";

const CategoryNavigation: FC = () => {

    const [ isCauldrons, setIsCauldrons ] = useState<any[]>([
        {
            text: 'Главная',
            key: 'main'
        },
        {
            text: 'Аксессуары',
            key: 'main1'
        },
        {
            text: 'Кастрюли',
            key: 'main2'
        },
        {
            text: 'Кастрюли-modern',
            key: 'main3'
        },
        {
            text: 'Кастрюли-loft',
            key: 'main4'
        }
    ])

    return (
        <div className="category-block-right">
            <div className="category-block-right-header">
                <h3>Навигация</h3>
                <Button text={ <Plus color={'#007BFF'} size={20}/> }
                        rightIcon={ 'Добавить' }
                        className="btn-header"
                />
            </div>
            <div className="category-block-right-content">
                { isCauldrons.map((item, idx) => (
                    <div className="category-block-right-content-item">
                        <div className="category-block-right-content-item-btn">
                            <Button
                                text={ <Burger color={ '#b3b3b3' } size={ 14 }/> }
                                className="btn-burger"
                            />
                            <p>{ item.text }</p>
                        </div>
                        <div className="category-block-right-content-item-arrow">
                            <Button
                                text={ <ArrowBottom color={ '#003166' }/> }
                                className="btn-right"
                            />
                            <Button
                                text={ <Pen color={ '#007BFF' }/> }
                                className="btn-right"
                            />
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default CategoryNavigation;