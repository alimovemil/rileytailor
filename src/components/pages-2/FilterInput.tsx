import React, { FC, useState } from 'react';
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../form/CheckBox";
import DialogRightByContent from "../dialog/DialogRightByContent";
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

    const [ isChecked, setIsChecked ] = useState(false);

    const [isShowModal, setIsShowModal] = useState(false);

    const filter = [
        {
            title: 'Диаметр, см',
            checkbox: '13 - 15'
        },
        {
            checkbox: '16 - 18'
        },
        {
            checkbox: '19 - 20'
        },
        {
            checkbox: '21 - 23'
        },
        {
            checkbox: '24'
        },
        {
            checkbox: '25 - 27'
        },
        {
            checkbox: '28 - 29'
        },
        {
            title: 'Ëмкость, л'
        },
        {
            checkbox: '1 - 2'
        },
        {
            checkbox: '2 - 3'
        },
        {
            checkbox: '3 - 4'
        },
        {
            checkbox: '4 - 5'
        },
        {
            checkbox: '5 - 6'
        },
        {
            checkbox: '6 - 7'
        },
        {
            title: 'Внутреннее антипригарное покрытие',
        },
        {
            checkbox: 'Без антипригарного покрытия'
        },
        {
            checkbox: 'Тефлоновое'
        },
        {
            title: 'Материал'
        },
        {
            checkbox: 'Алюминий'
        },
        {
            checkbox: 'Нержавеющая сталь'
        },
        {
            title: ' Антипригарное покрытие '
        },
        {
            checkbox: 'С внутренним антипригарным покрытием'
        }
    ]

    function onClickApp() {
        navigate('')
    }

    return (
        <DialogRightFilter
            isOpen={isOpen}
            closeModal={() => {
                setIsOpen();
            }}
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
                                <h4>{ item.title }</h4>
                                <div className="filter-item-inner-meta-content-checkbox">
                                    <Checkbox
                                        isChecked={ isChecked }
                                        onChange={ setIsChecked }
                                        className={ 'filter-item-inner-meta-content-checkbox-num' }
                                        text={ item.checkbox }
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