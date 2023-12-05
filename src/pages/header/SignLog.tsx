import React, { FC, } from 'react';
import Header from "./index";
import Product from "../products";
import Footer from "../footer";
import Sign from "../../container/icons/Sign";
import Button from "../../components/form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";



const SignLog: FC = () => {
    const navigate = useNavigate()

    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    console.log(editedData)

    function onClickRedactor() {
        navigate('edit')
    }

    function onClickExit() {
        navigate('/pages')
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

                                            <Button text={ 'Выйти' }
                                                    onClick={ onClickExit }
                                                    className={ 'btn' }/>
                                        </div>
                                    </div>

                                    <div className="sign-content-order">
                                        <div className="sign-content-order-history">

                                            <div className="sign-content-order-history-meta">
                                                <h3>История заказов</h3>
                                            </div>
                                            <div className="sign-content-order-history-basket">
                                                <Basket size={ 80 } color={ '#000000' }/>
                                                <p>У вас нет оформленных заказов</p>
                                            </div>
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