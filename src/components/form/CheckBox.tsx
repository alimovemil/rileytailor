import { FC, ReactElement } from 'react'

interface CheckboxProps {
    text?: string | ReactElement
    isChecked: boolean
    onChange: (checked: boolean) => void
    className?: string
}

const Checkbox: FC<CheckboxProps> = (
    {
        text,
        isChecked,
        onChange,
        className = ''
    }
    ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <div className={`checkbox ${className}`}>
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
