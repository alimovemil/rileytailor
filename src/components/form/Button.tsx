import React, { FC, ReactNode } from "react";

interface ButtonProps {
    loading?: boolean
    leftIcon?: ReactNode | undefined
    rightIcon?: ReactNode | undefined
    text: string | ReactNode
    onClick?: (event: any) => void
    onMouseEnter?: (event: any)=> void
    onMouseLeave?: (event: any)=> void
    onBlur?: (event: any) => void;
    className?: string
    type?: 'submit' | 'reset' | 'button' | undefined
    gap?: number
    disabled?: boolean
}
const Button: FC<ButtonProps> = (
    {
        loading,
        leftIcon,
        rightIcon,
        text,
        onClick,
        onMouseEnter,
        onBlur,
        onMouseLeave,
        className,
        type = 'button',
        gap= 10,
        disabled = false
    }
) => {
    function onClickBtn(event: any) {
        onClick && onClick(event)
    }

    function onBlurBtn(event: any) {
        onBlur && onBlur(event);
    }

    return (
        <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onBlur={onBlurBtn}
            type={type}
            onClick={(event) => onClickBtn(event)}
            className={className}
            style={{ gap: (leftIcon || rightIcon) ? gap : 0 }}
            disabled={disabled || loading}
        >
            { leftIcon && (
                <span className="header__left">
                    { leftIcon }
                </span>
            )}

            { loading ? (
                <div className="vertical-center" style={{ position: 'relative' }}>
                </div>
            ) : <div className='header__text'>{text}</div>}

            { rightIcon && (
                <span className="header__right">
                    { rightIcon }
                </span>
            )}
        </button>
    );
}

export default Button;
