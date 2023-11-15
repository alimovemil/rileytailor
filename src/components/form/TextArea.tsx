import { FC, ReactNode, useEffect, useState } from "react";

interface TextAreaProps {
    rows?: number
    value: any
    onChangeValue?: (value: string) => void
    onKeyDown?: (key: string) => void
    placeholder?: string
    imgLeft?: ReactNode | null
    imgRight?: ReactNode | null
    className?: string
    label?: string
    id?: string
    maxLength?: number
    minLength?: number
    disabled?: boolean
}

const TextArea: FC<TextAreaProps> = (
    {
        rows = 6,
        value,
        onChangeValue,
        placeholder = '',
        imgLeft,
        imgRight,
        className = '',
        label,
        id = `text-field-${ Math.random() }`,
        maxLength,
        minLength,
        disabled
    }
) => {
    const [ isFocused, setIsFocused ] = useState(false);
    const [ valueLocal, setValue ] = useState<string>(value);

    const onChangeLocalValue = (value: string) => {
        setValue(value);

        if (onChangeValue) onChangeValue(value);
    };

    useEffect(() => {
        if (value !== valueLocal) setValue(value)
    }, [ value ])

    return (
        <div className={ `form-group ${ className }` }>
            { imgLeft && (
                <div className="form-icon-left">
                    { imgLeft }
                </div>
            ) }

            <div className="form-block">
                { label && (
                    <label htmlFor={ id }
                           className={ `form-label${ (isFocused || String(valueLocal).length) ? ' focus' : '' }` }>
                        { label }
                    </label>
                ) }

                <textarea
                    id={ id }
                    value={ valueLocal }
                    onChange={ (e) => onChangeLocalValue(e.target.value) }
                    placeholder={ placeholder }
                    className={ `form-control form-textarea${ label ? ' label' : '' }${ imgLeft ? ' left' : '' }${ imgRight ? ' right' : '' }` }
                    onFocus={ () => setIsFocused(true) }
                    onBlur={ () => setIsFocused(false) }
                    maxLength={ maxLength }
                    minLength={ minLength }
                    disabled={ disabled }
                    rows={ rows }
                />
            </div>

            { imgRight && (
                <div className="form-icon-right">
                    { imgRight }
                </div>
            ) }
        </div>
    )
}

export default TextArea;
