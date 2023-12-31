import React, { FC, useState, } from 'react';
import Header from "./index";
import Product from "../products";
import Footer from "../footer";
import Sign from "../../container/icons/Sign";
import Button from "../../components/form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";
import { useDispatch, useSelector } from "react-redux";
import { setUnauthenticated } from "../../redux/reducers/auth/authReducer";
import { GetCauldrons } from "../../redux/reducers/basket/basketRe";
import SignLogItem from "../../components/pages-2/SignLogitem/SignLogItem";
import Close from "../../container/icons/Close";
import TextField from "../../components/form/TextField";

const SignLog: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const location = useLocation();
    const state: any = location.state;
    const updatedItem = state?.data || {};
    console.log(updatedItem)
    const productsInBasket = useSelector(GetCauldrons);

    const [ isEditVisible, setIsEditVisible ] = useState(false);

    const [ isEdit, SetIsEdit ] = useState<any[]>([
        {
            value: '',
            key: 'reg',
            label: 'Имя',
            field: true,
            fields: false,
            styles: {maxWidth: '242px', width: '100%'},
            placeholder: 'Нигматов',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
        },
        {
            value: '',
            key: 'fio',
            label: 'Фамилия',
            field: true,
            fields: false,
            styles: {maxWidth: '242px', width: '100%'},
            placeholder: 'Тимур',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
        },
        {
            fields: true,
            field: false,
            label: 'Номер телефона',
            type: 'text',
            styles: {width: '100%'},
            placeholder: '+998 90 353-03-30',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
        },
        {
            fields: true,
            field: false,
            label: 'Эл. почта',
            type: 'email',
            styles: {width: '100%'},
            placeholder: 'ya@tnigmatov.ru',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
        }
    ])

    const onChangeSetValue = (value: string, key: string) => {
        const listUpdate = [ ...isEdit ].map((i) => {
            if (i.key === key) i.value = value;
            return i;
        });

        SetIsEdit(listUpdate);
    }

    function toggleEditVisibility() {
        setIsEditVisible(!isEditVisible);
    }

    function onClickEdit() {
        toggleEditVisibility();
    }

    function onClickExit() {
        navigate('/')
        dispatch(setUnauthenticated());
    }

    return (
        <div>
            <Header/>
            <div className="content admin-header">
                <Product/>

                <div className="sign">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="sign-content">
                                    <div className="sign-content-inner">
                                        <div className="sign-content-inner-item">
                                            <Sign color={ '#1E2546' }/>
                                            <div className="sign-content-inner-item-profile">
                                                <h3>Нигматов Тимур</h3>
                                                <p>ya@tnigmatov.ru</p>
                                            </div>
                                        </div>

                                        <div className="sign-content-inner-redactor" onClick={ onClickEdit }>
                                            <span>Редактировать</span>
                                        </div>

                                    </div>
                                    { isEditVisible && (
                                        <div className="sign-content-block">
                                            <form className="sign-content-block-item">
                                                <div className="sign-content-block-item-name">
                                                    <div className="sign-content-inner-item">
                                                        <Sign color={ '#1E2546' }/>
                                                        <div className="sign-content-inner-item-profile">
                                                            <h3>Нигматов Тимур</h3>
                                                            <p>ya@tnigmatov.ru</p>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        text={<Close color={"#000000"}/>}
                                                        className="btn-log"
                                                        onClick={toggleEditVisibility}
                                                    />
                                                </div>
                                                <div className="checkout-block-goods-top-line"/>
                                                <div className="sign-content-block-item-meta">
                                                    { isEdit.map((list, idx) => (
                                                        <div style={ list.styles }
                                                             className="sign-content-block-item-meta-field"
                                                             key={ `sign-content-block-item-meta-field-${ idx }` }>
                                                            { (list.field && (
                                                                <TextField value={ list.value }
                                                                           label={ list.label }
                                                                           type={ 'text' }
                                                                           placeholder={list.placeholder}
                                                                           onChangeValue={(value) => {
                                                                               list.setValue(value, list.key)
                                                                           }}
                                                                />
                                                            )) }

                                                            { (list.fields && (
                                                                <TextField
                                                                    value={ list.value }
                                                                    label={ list.label }
                                                                    type={ list.type }
                                                                    placeholder={list.placeholder}
                                                                />
                                                            )) }
                                                        </div>
                                                    )) }
                                                </div>
                                                <Button
                                                    text="Сохранить"
                                                    className="btn"
                                                />
                                                <Button
                                                    text="Выйти"
                                                    className="btn"
                                                    onClick={onClickExit}
                                                />
                                            </form>

                                        </div>
                                    ) }
                                    <div className="sign-content-order">
                                        <div className="sign-content-order-history">

                                            <div className="sign-content-order-history-meta">
                                                <h3>История заказов</h3>
                                            </div>
                                            <SignLogItem/>
                                            <div className="sign-content-order-history-list">
                                                { !!productsInBasket.length && productsInBasket.map((item, idx) => (
                                                    <div key={ idx } className="sign-content-order-history-list-item">
                                                        <div className="sign-content-order-history-list-item-img">
                                                            <div
                                                                className="sign-content-order-history-list-item-img-inner">
                                                                <img src={ item.img } alt=""/>
                                                            </div>
                                                            <div
                                                                className="sign-content-order-history-list-item-img-price">
                                                                <p>{ item.text }</p>

                                                                <div
                                                                    className={ `sign-content-order-history-list-item-img-price-paragraph ${ item.className }` }>
                                                                    <h4>{ item.paragraph }</h4>
                                                                    <span>{ item.price }</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h5>{ item.count } товаров</h5>
                                                    </div>
                                                )) }
                                            </div>

                                            { !productsInBasket.length && (
                                                <div className="sign-content-order-history-basket">
                                                    <Basket size={ 80 } color={ '#000000' }/>
                                                    <p>У вас нет оформленных заказов</p>
                                                </div>
                                            ) }

                                            <SignLogItem/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        </div>
    );
};

export default SignLog;