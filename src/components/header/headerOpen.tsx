import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DialogContainer from '../dialog/DialogContainer';
import Close from '../../container/icons/Close';
import Eye from '../../container/icons/Eye';
import EyeClose from '../../container/icons/EyeClose';
import Button from '../form/Button';
import HeaderRegistration from "./HeaderRegistration";
import { setAuthenticated } from "../../redux/reducers/auth/authReducer";
import { useAppDispatch } from "../../redux/store";

interface HeaderOpenProps {
    isShow: boolean;
    setIsShow: () => void;
}

const HeaderOpen: FC<HeaderOpenProps> = ({ isShow, setIsShow }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<any>({});

    const [isShowPassword, setShowPassword] = useState(false);

    const [isRegistrationMode, setRegistrationMode] = useState(false);

    const onSubmit = (data: any) => {
        if (isRegistrationMode) {
        } else {
            const isAuthenticated = data.username === 'timtim' && data.password === '2525';
            if (isAuthenticated) {
                dispatch(setAuthenticated());
                setIsShow();
                navigate('/sign');
            } else {
                console.log('Login failed. Incorrect credentials.');
            }
        }
    };

    const switchToRegistrationMode = () => {
        setRegistrationMode(true);
    };

    const switchToLoginMode = () => {
        setRegistrationMode(false);
    };

    function onClickPassword() {
    }

    return (
        <DialogContainer
            isOpen={isShow}
            closeModal={() => {
                setIsShow();
            }}
            closeIcon={<Close />}
            label={isRegistrationMode ? 'Регистрация' : 'Вход'}
        >
            {isRegistrationMode ? (
                <HeaderRegistration onClose={switchToLoginMode}/>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="form-bottom">
                    <div className="form-group-auth">
                        <div className="form-group-auth-block position-relative">
                            <label htmlFor="username">Эл. почта</label>
                            <input
                                className="form-control"
                                type={'text'}
                                {...register('username')}
                                autoComplete="new-password"
                            />
                            <label htmlFor="username">Пароль</label>
                            <input
                                className="form-control"
                                type={isShowPassword ? 'text' : 'password'}
                                {...register('password')}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="form-group-auth-block-btn"
                                onClick={() => setShowPassword(!isShowPassword)}
                            >
                                {!isShowPassword ? <Eye color={'black'} /> : <EyeClose color={'black'} />}
                            </button>
                        </div>
                    </div>
                    <div className="form-group-auth-text">
                        <Button text={'Забыли свой пароль?'} onClick={onClickPassword} className={'btn'} />
                    </div>

                    <div className="form-bottom-entry">
                        <Button type="submit" text={'Войти'} className={'btn'} />
                        <Button text={'Зарегистрироваться'} onClick={switchToRegistrationMode} className={'btn'} />
                    </div>
                </form>
            )}

        </DialogContainer>
    );
};

export default HeaderOpen;
