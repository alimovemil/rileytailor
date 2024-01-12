import React, { FC, useState } from 'react';
import Button from "../../../components/form/Button";
import Plus from "../../../container/icons/Plus";
import Search from "../../../container/icons/Search";
import TextField from "../../../components/form/TextField";
import Pen from "../../../container/icons/Pen";

const PropertyColor: FC = () => {

    const [isColor, setIsColor] = useState<any[]>([
        {
            name: 'Зелёный',
            span : '8FC001'
        },
        {
            name: 'Синий',
            span : '007BFF'
        },
        {
            name: 'Красный',
            span : 'FF0000'
        },
        {
            name: 'Жёлтый',
            span : 'FFE500'
        },
        {
            name: 'Фиолетовый',
            span : '8000FF'
        },
        {
            name: 'Чёрный',
            span : '000000'
        },
        {
            name: 'Белый',
            span : 'FFFFFF'
        },
        {
            name: 'Розовый',
            span : 'FFAFAF'
        },
        {
            name: 'Сиреневый',
            span : 'CE9DFF'
        },
        {
            name: 'Золотой',
            span: 'CBB47B'
        }
    ])

    return (
        <div className="property-content-item-right">
            <div className="property-content-item-right-top">
                <h3>Цвета</h3>
                <Button
                    text={<Plus color={'#007BFF'} size={20}/>}
                    rightIcon={'Добавить'}
                    className={'btn-top'}
                />
            </div>
            <div className="property-content-item-right-search">
                <TextField
                    value={ '' }
                    placeholder={ 'Поиск' }
                    imgLeft={ <Search color={ '#007BFF' } size={30}/> }
                />
            </div>
            <div className="property-content-item-right-block">
                {isColor.map((item, idx) => (
                    <div className="property-content-item-right-block-inner"
                    key={`property-content-item-right-block-inner-${idx}`}
                    >
                        <div className="property-content-item-right-block-inner-add"/>
                        <p>{item.name}</p>
                        <span>{item.span}</span>
                        <Button text={<Pen color={'#007BFF'}/>} className="btn-pen"/>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PropertyColor;