import { InputHTMLAttributes, forwardRef } from 'react';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, onChange, label, ...props }, ref) => {
        return (
            <label className="switch">
                <input
                    ref={ref}
                    type='checkbox'
                    onChange={onChange}
                    hidden
                    {...props}
                />

                {label && <div className="switch-label">{label}</div>}

                <div className="switch-div" />
            </label>
        );
    }
);

Switch.displayName = 'Switch';

export default Switch;
