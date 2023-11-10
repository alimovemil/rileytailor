import { FC, ReactElement } from "react";
import Select, { components, SingleValueProps } from "react-select";
import Button from "../form/Button";
import Close from "../../container/icons/Close";

interface FilterSelectProps {
    options: any[]
    onChange: (value: any) => void,
    deleteItem?: () => void,
    placeholder?: string
    isMulti?: boolean
    rest?: any
    value?: any
    imgLeft?: ReactElement | null
    imgRight?: ReactElement | null
    className?: string
    isShowBtnDelete?: boolean
    disabled?: boolean
    defaultValue?: any
    required?: boolean
}

const customStyles = {
    indicatorSeparator: () => ({}),
    control: (provided: object) => ({
        ...provided,
        border: 'none'
    }),
    dropdownIndicator: (provided: object) => ({
        ...provided,
        paddingRight: '14.5px'
    }),
    valueContainer: (provided: object) => ({
        ...provided,
    }),
    indicatorsContainer: (provided: object) => ({
        ...provided,
    }),
    input: (provided: object) => ({
        ...provided,
    })
};

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator { ...props }>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.5">
                    <path d="M5 7.5L10 12.5L15 7.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity={'0.5'}
                    />
                </g>
            </svg>
        </components.DropdownIndicator>
    );
};

const SingleValue = (
    {
        children,
        ...props
    }: SingleValueProps<any>
) => {

    return (
        <components.SingleValue { ...props }>
            { children }

            { props.data.labelSecond && (
                <span
                    className={ 'filter-select-type' }
                    style={ {
                        background: 'rgba(112, 213, 132, 0.10)'
                    } }
                >
                { props.data.labelSecond }
            </span>
            ) }
        </components.SingleValue>
    )
};

const FilterSelect: FC<FilterSelectProps> = (
    {
        options,
        onChange,
        imgLeft,
        imgRight,
        className,
        isShowBtnDelete = false,
        deleteItem,
        disabled,
        defaultValue,
        required,
        ...props
    }
) => {
    return (
        <div className={ `form-group dropdown__block ${className ? className : ''}${imgLeft ? ' left' : ''}${imgRight ? ' right' : ''}${disabled ? ' disabled' : ''}`}>
            { imgLeft && (
                <div className="form-icon-left">
                    { imgLeft }
                </div>
            ) }

            <Select
                defaultValue={defaultValue}
                styles={ customStyles }
                className={ 'filter-select' }
                classNamePrefix={ 'react-select-prefix' }
                components={ {DropdownIndicator, SingleValue} }
                options={ options }
                isSearchable={ false }
                placeholder={ 'Статус' }
                onChange={ (val) => onChange(val) }
                // menuIsOpen
                noOptionsMessage={() => (<div>Данных нет</div>)}
                isDisabled={disabled}
                { ...props }
            />

            {isShowBtnDelete && (
                <div className={'search__block__clear'}>
                    <Button
                        text={(
                            <Close color={'#FF0000'}/>
                        )}
                        onClick={() => deleteItem && deleteItem()}
                        className={'btn btn-icon'}
                    />
                </div>
            )}

            { imgRight && (
                <div className="form-icon-right">
                    { imgRight }
                </div>
            ) }
        </div>
    );
}

export default FilterSelect;
