import React, { FC } from 'react';
import Button from "../form/Button";
import { useNavigate } from "react-router-dom";

interface RegistrationProps {
    onClose: () => void;
}

const HeaderRegistration: FC<RegistrationProps> = ({onClose}) => {

    const navigate = useNavigate()

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
                    <label htmlFor="username">Email</label>
                    <input
                        className="form-control"
                        type={ 'email' }
                        autoComplete="new-password"
                    />
                </div>
                <div className="registration-form-email">
                    <span>Ссылка для установки нового пароля будет отправлена на ваш адрес электронной почты.</span>
                </div>
                <div className="registration-form-data">
                    <p>Ваши личные данные будут использоваться для упрощения вашего дальнейшего взаимодействия с сайтом,
                        управления доступом к вашему аккаунту и других целей, описанных в документе <Button
                            text={ 'политика конфиденциальности.' }
                            onClick={ onClickPolicy }
                            className={ 'btn' }
                        /></p>
                </div>
                <div className="registration-form-entry">
                    <Button type="submit" text={ 'Регистрация' } className={ 'btn' } onClick={onClickPolicy}/>
                    <Button text={ 'Вход' } onClick={ onClickLogin } className={ 'btn' }/>
                </div>

            </form>
        </div>
    );
};

export default HeaderRegistration;