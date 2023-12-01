import { CSSProperties, FC, ReactElement } from 'react'

interface CheckboxProps {
    text?: string | ReactElement
    isChecked: boolean
    onChange: (checked: boolean) => void
    className?: string,
    style?: CSSProperties;
}

const Checkbox: FC<CheckboxProps> = (
    {
        text,
        isChecked,
        onChange,
        className = '',
        style = {}
    }
    ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <div style={style} className={`checkbox ${className}`}>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />

                {text}
            </label>
        </div>
    );
};

export default Checkbox;
