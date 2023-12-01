import React, { FC } from 'react';
import Header from "./index";
import Product from "../products";
import TextField from "../../components/form/TextField";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import NavBarBottom from "../../components/sidebar/NavBarBottom";

const SignRedactor: FC = () => {

    const navigate = useNavigate()

    const form = [
        {
            value: '',
            span: 'Так ваше имя будет отображаться в разделе аккаунта и при публикации отзывов',
            label: 'Отображаемое имя ',
            type: 'text'
        },
        {
            value: '',
            label: 'Номер телефона',
            type: 'number'
        },
        {
            value: '',
            label: 'Email',
            type: 'email'
        }
    ]

    const password = [
        {
            text: 'Действующий пароль (не заполняйте, чтобы оставить прежний)',
            value: ''
        },
        {
            value: '',
            text: 'Новый пароль (не заполняйте, чтобы оставить прежний)'
        },
        {
            value: '',
            text: 'Подтвердите новый пароль'
        }
    ]

    function onClickExit() {
        navigate('')
    }

    function onClickSave() {
        navigate('')
    }

    return (
        <>
            <Header/>
            <div className="content admin-header">
                <Product/>
                <div className="sign-redactor">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="sign-redactor-content">
                                    <div className="sign-redactor-content-inner">
                                        <h4>Мой аккаунт</h4>
                                    </div>
                                    <form className="sign-redactor-content-form">
                                        <div className="sign-redactor-content-form-edit">
                                            <TextField
                                                value={ '' }
                                                label={ 'Имя' }
                                            />
                                            <TextField
                                                value={ '' }
                                                label={ 'Фамилия' }
                                            />
                                        </div>

                                        { form.map((item, idx) => (
                                            <div className="sign-redactor-content-form-type"
                                                 key={ `sign-redactor-content-form-type-${ idx }` }
                                            >
                                                <TextField value={ item.value }
                                                           label={ item.label }
                                                           type={ item.type }
                                                />
                                                <span><em>{ item.span }</em></span>
                                            </div>
                                        )) }

                                        <div className="sign-redactor-content-form-password">
                                            <h4>Смена пароля</h4>
                                            { password.map((list, idx) => (
                                                <div className="sign-redactor-content-form-password-edit">
                                                    <p>{ list.text }</p>
                                                    <TextField value={ list.value }/>
                                                </div>
                                            )) }
                                        </div>

                                        <div className="sign-redactor-content-form-btn">
                                            <Button text={ 'Сохранить изменения' }
                                                    onClick={ onClickSave }
                                                    className={ 'btn' }
                                            />

                                            <Button
                                                text={ 'Выйти' }
                                                onClick={ onClickExit }
                                                className={ 'btn' }
                                            />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
            <NavBarBottom/>
        </>
    );
};

export default SignRedactor;