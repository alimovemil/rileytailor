import React, { FC, useState } from 'react';
import Header from "./index";
import Product from "../products";
import TextField from "../../components/form/TextField";
import Button from "../../components/form/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import NavBarBottom from "../../components/sidebar/NavBarBottom";

const SignRedactor: FC = () => {

    const navigate = useNavigate()

    const [ form, SetForm ] = useState([
        {
            value: '',
            span: 'Так ваше имя будет отображаться в разделе аккаунта и при публикации отзывов',
            label: 'Отображаемое имя ',
            type: 'text',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'field'
        },
        {
            value: '',
            label: 'Номер телефона',
            type: 'number',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'phone-key'
        },
        {
            value: '',
            label: 'Email',
            type: 'email',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'email'
        }
    ])

    const [ password, setPassword ] = useState<any[]>([
        {
            text: 'Действующий пароль (не заполняйте, чтобы оставить прежний)',
            value: '',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            key: 'password-now'
        },
        {
            value: '',
            text: 'Новый пароль (не заполняйте, чтобы оставить прежний)',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            key: 'new-password'
        },
        {
            value: '',
            text: 'Подтвердите новый пароль',
            setValue: (value: string, key: string) => onChangeSetValues(value, key),
            key: 'update-password'
        }
    ])

    const [ isName, setIsName ] = useState([
        {
            value: '',
            names: 'Имя',
            setValue: (value: string, key: string) => onChangeSet(value, key),
            key: 'names-key'
        },
        {
            value: '',
            setValue: (value: string, key: string) => onChangeSet(value, key),
            names: 'Фамилия',
            key: 'surnames-key'
        }
    ])

    const onChangeSetValue = (value: string, key: string) => {
        const listUpdate = [ ...form ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        SetForm(listUpdate);
    }

    const onChangeSet = (value: string, key: string) => {
        const listUpdate = [ ...isName ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        setIsName(listUpdate);
    }

    const onChangeSetValues = (value: string, key: string) => {
        const listUpdate = [ ...password ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        setPassword(listUpdate);
    }

    function onClickExit() {
        navigate('/')
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
                                            { isName.map((is, idx) => (
                                                <div key={`sign-redactor-content-form-edit-${idx}`}>
                                                    <TextField
                                                        value={ is.value || '' }
                                                        label={ is.names }
                                                        onChangeValue={ (value) => is.setValue(value, is.key) }
                                                    />
                                                </div>
                                            )) }

                                        </div>

                                        { form.map((item, idx) => (
                                            <div className="sign-redactor-content-form-type"
                                                 key={ `sign-redactor-content-form-type-${ idx }` }
                                            >
                                                <TextField
                                                    value={ item.value || '' }
                                                    label={ item.label }
                                                    type={ item.type }
                                                    onChangeValue={ (value) => item.setValue(value, item.key) }
                                                />
                                                <span><em>{ item.span }</em></span>
                                            </div>
                                        )) }

                                        <div className="sign-redactor-content-form-password">
                                            <h4>Смена пароля</h4>
                                            { password.map((list, idx) => (
                                                <div className="sign-redactor-content-form-password-edit"
                                                     key={ `sign-redactor-content-form-password-edit-${ idx }` }
                                                >
                                                    <p>{ list.text }</p>
                                                    <TextField
                                                        value={ list.value }
                                                        onChangeValue={ (value) => list.setValue(value, list.key) }
                                                    />
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