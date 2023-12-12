import React, { FC, } from 'react';
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

const SignLog: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const location = useLocation();
    const state: any = location.state;
    const updatedItem = state?.data || {};
    console.log(updatedItem)
    const productsInBasket = useSelector(GetCauldrons);

    function onClickExit() {
        navigate('/')
        dispatch(setUnauthenticated());
    }

    function onClickRedactor() {
        navigate('edit')
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

                                        <div className="sign-content-inner-redactor">
                                            <Button text={ 'Редактировать' }
                                                    onClick={ onClickRedactor }
                                                    className={ 'btn' }
                                            />
                                        </div>
                                    </div>

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