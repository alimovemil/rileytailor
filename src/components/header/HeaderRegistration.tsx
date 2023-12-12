import React, { FC, useEffect, useRef, useState } from 'react';
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";
import { IMask } from "react-imask";

interface RegistrationProps {
    onClose: () => void;
}

const HeaderRegistration: FC<RegistrationProps> = ({onClose}) => {

    const inputRef = useRef(null);

    const navigate = useNavigate()

    const [ registration, setRegistration ] = useState([
        {
            name: 'Имя',
            type: 'text'
        },
        {
            name: 'Фамилия',
            type: 'text'
        },
        {
            name: 'Номер телефона',
            type: 'text',
            ref: inputRef,
        },
        {
            name: 'Эл. почта',
            type: 'email',
        },
        {
            name: 'Придумайте пароль',
            type: 'password'
        }
    ])

    useEffect(() => {
        if (inputRef.current) {
            IMask(inputRef.current, {
                mask: '+998 90 000 00 00'
            });
        }
    }, []);


    function onClickPolicy() {
        navigate('')
    }

    function onClickLogin() {
        onClose();
    }

    return (
        <div className="registration">
            <form className="registration-form">
                <div className="registration-form-group">
                    { registration.map((item, idx) => (
                        <div key={ `registration-form-group-item${ idx }` }>
                            <label htmlFor={ item.name }>{ item.name }</label>
                            <input
                                id={ item.name }
                                className="form-control"
                                type={ item.type }
                                autoComplete="new-password"
                                ref={ item.ref }
                            />

                        </div>
                    )) }

                </div>
                <div className="registration-form-data">
                    <p>Регистрируясь, вы соглашаетесь с <Button
                        text={ 'пользовательским соглашением' }
                        onClick={ onClickPolicy }
                        className={ 'btn' }
                    /></p>
                </div>
                <div className="registration-form-entry">
                    <Button type="submit" text={ 'Зарегистрироваться' } className={ 'btn' } onClick={ onClickPolicy }/>
                    <Button text={ 'Войти' } onClick={ onClickLogin } className={ 'btn' }/>
                </div>

            </form>
        </div>
    );
};

export default HeaderRegistration;