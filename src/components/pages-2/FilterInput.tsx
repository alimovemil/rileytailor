import React, { CSSProperties, FC, useState } from 'react';
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../form/CheckBox";
import DialogRightFilter from "../dialog/DialogRightFilter";

interface FilterOpenModal {
    isOpen: boolean
    setIsOpen: () => void
}

const FilterInput: FC<FilterOpenModal> = (
    {
        isOpen,
        setIsOpen
    }
) => {

    const navigate = useNavigate()

    const filter = [
        {
            title: 'Диаметр, см',
            checkbox: '13 - 15',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
        },
        {
            checkbox: '16 - 18',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '19 - 20',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '21 - 23',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '24',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '25 - 27',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '28 - 29',
            margin: {marginTop: '8px'}
        },
        {
            title: 'Ëмкость, л',
            checkbox: '1 - 2',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
        },
        {
            checkbox: '2 - 3',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '3 - 4',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '4 - 5',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '5 - 6',
            margin: {marginTop: '8px'}
        },
        {
            checkbox: '6 - 7',
            margin: {marginTop: '8px'}
        },
        {
            title: 'Внутреннее антипригарное покрытие',
            checkbox: 'Без антипригарного покрытия',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
        },
        {
            checkbox: 'Тефлоновое',
            margin: {marginTop: '8px'}
        },
        {
            title: 'Материал',
            checkbox: 'Алюминий',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
        },
        {
            checkbox: 'Нержавеющая сталь',
            margin: {marginTop: '8px'}
        },
        {
            title: 'Антипригарное покрытие',
            checkbox: (
                <>
                    С внутренним <br/> антипригарным <br/> покрытием
                </>
            ),
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
        },
    ]

    const [ checkboxStates, setCheckboxStates ] = useState<{ [key: string]: boolean }>(() => {
        return filter.reduce((acc, item) => {
            acc[item.checkbox as string] = false;
            return acc;
        }, {} as { [key: string]: boolean });
    });

    function handleCheckboxChange(checkbox: string) {
        setCheckboxStates(prevStates => ({
            ...prevStates,
            [checkbox]: !prevStates[checkbox],
        }));
    }

    function onClickApp() {
        navigate('')
    }

    return (
        <DialogRightFilter
            isOpen={ isOpen }
            closeModal={ () => {
                setIsOpen();
            } }
        >
            <div className="filter-item">
                <div className="filter-item-inner">
                    <div className="filter-item-inner-cost">
                        <h3>Стоимость</h3>
                        <div className="filter-item-inner-cost-range">
                            <RangeSlider min={ 0 } max={ 100 }/>

                            <div className="filter-item-inner-cost-range-number">
                                <p>123000</p>
                                <p>987000</p>
                            </div>

                            <Button
                                text={ 'Применить' }
                                className={ 'btn' }
                                onClick={ onClickApp }
                            />
                        </div>
                    </div>

                    <div className="filter-item-inner-meta">
                        { filter.map((item, idx) => (
                            <div className="filter-item-inner-meta-content">
                                <div className={ item.className }></div>
                                <h4 style={ item.styles }>{ item.title }</h4>
                                <div className="filter-item-inner-meta-content-checkbox">
                                    <Checkbox
                                        isChecked={ checkboxStates[item.checkbox as string] }
                                        onChange={ () => handleCheckboxChange(item.checkbox as string) }
                                        className={ `` }
                                        text={ item.checkbox }
                                        style={ item.margin }
                                    />
                                </div>
                            </div>
                        )) }
                    </div>

                </div>
            </div>
        </DialogRightFilter>

    );
};

export default FilterInput;