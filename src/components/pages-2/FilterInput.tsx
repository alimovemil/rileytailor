import React, { CSSProperties, FC, useState } from 'react';
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../form/CheckBox";
import DialogRightFilter from "../dialog/DialogRightFilter";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useAppDispatch, } from "../../redux/store";
import { setRangeValues,} from "../../redux/slices/filterSlice";
import { setCheckboxState,} from "../../redux/slices/filterSliceCheckbox";
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
    useNavigate();
    const dispatch = useAppDispatch();

    const [ filter, SetFilter ] = useState([
        {
            title: 'Диаметр, см',
            checkbox: '13 - 15',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
            key: 'checkbox1'
        },
        {
            checkbox: '16 - 18',
            margin: {marginTop: '8px'},
            key: 'checkbox2'
        },
        {
            checkbox: '19 - 20',
            margin: {marginTop: '8px'},
            key: 'checkbox3'
        },
        {
            checkbox: '21 - 23',
            margin: {marginTop: '8px'},
            key: 'checkbox4'
        },
        {
            checkbox: '24',
            margin: {marginTop: '8px'},
            key: 'checkbox5'
        },
        {
            checkbox: '25 - 27',
            margin: {marginTop: '8px'},
            key: 'checkbox6'
        },
        {
            checkbox: '28 - 29',
            margin: {marginTop: '8px'},
            key: 'checkbox7'
        },
        {
            title: 'Ëмкость, л',
            checkbox: '1 - 2',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
            key: 'checkbox8'
        },
        {
            checkbox: '2 - 3',
            margin: {marginTop: '8px'},
            key: 'checkbox9'
        },
        {
            checkbox: '3 - 4',
            margin: {marginTop: '8px'},
            key: 'checkbox10'
        },
        {
            checkbox: '4 - 5',
            margin: {marginTop: '8px'},
            key: 'checkbox11'
        },
        {
            checkbox: '5 - 6',
            margin: {marginTop: '8px'},
            key: 'checkbox12'
        },
        {
            checkbox: '6 - 7',
            margin: {marginTop: '8px'},
            key: 'checkbox13'
        },
        {
            title: 'Внутреннее антипригарное покрытие',
            checkbox: 'Без антипригарного покрытия',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
            key: 'checkbox14'
        },
        {
            checkbox: 'Тефлоновое',
            margin: {marginTop: '8px'},
            key: 'checkbox15'
        },
        {
            title: 'Материал',
            checkbox: 'Алюминий',
            className: 'lines-style',
            styles: {paddingBottom: '20px'} as CSSProperties,
            key: 'checkbox16'
        },
        {
            checkbox: 'Нержавеющая сталь',
            margin: {marginTop: '8px'},
            key: 'checkbox17'
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
            key: 'checkbox18'
        },
    ])
    const [sliderValues, setSliderValues] = useState<[number, number]>([0, 0]);

    const [ checkboxStates, setCheckboxStates ] = useState<{ [key: string]: boolean }>(() => {
        return filter.reduce((acc, item) => {
            acc[item.checkbox as string] = false;
            return acc;
        }, {} as { [key: string]: boolean });
    });

    const handleInsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };


    function handleCheckboxChange(checkbox: string) {
        setCheckboxStates((prevStates) => {
            return {
                ...prevStates,
                [checkbox]: !prevStates[checkbox],
            };
        });

        dispatch(setCheckboxState(checkbox));
    }


    function onClickApp() {
        dispatch(setRangeValues(sliderValues));
    }


    return (
        <DialogRightFilter
            isOpen={ isOpen }
            closeModal={ () => {
                setIsOpen();
            } }
        >
            <div className="filter-item" onClick={ handleInsideClick }>
                <div className="filter-item-inner">
                    <div className="filter-item-inner-cost">
                        <h3>Стоимость</h3>
                        <div className="filter-item-inner-cost-range">
                            <Slider
                                range
                                min={1000}
                                max={987000}
                                step={1000}
                                value={sliderValues}
                                onChange={(value: number | number[]) => {
                                    setSliderValues(Array.isArray(value) ? (value as [number, number]) : [0, 0]);
                                    dispatch(setRangeValues(sliderValues))
                                }}
                            />

                            <div className="filter-item-inner-cost-range-number">
                                <p>{sliderValues[0]}</p>
                                <p>{sliderValues[1]}</p>
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
                                <div className={ item.className }/>
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