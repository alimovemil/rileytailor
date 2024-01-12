import React, { FC } from 'react';
import Button from "../../../components/form/Button";
import AddFile from "../../../container/icons/AddFile";
import TextField from "../../../components/form/TextField";
import Select from "react-select";
import Search from "../../../container/icons/Search";
import OrderContent from "../../../components/admin/order/OrderContent";

const Order: FC = () => {

    const options1 = [
        {value: 'option1', label: 'Все Категории'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
        {value: 'option3', label: 'Option 3'},
        {value: 'option3', label: 'Option 3'},
    ];

    const options2 = [
        {value: 'category1', label: 'Все заказы'},
        {value: 'category2', label: 'Category 2'},
        {value: 'category3', label: 'Category 3'},
    ];

    const options3 = [
        {value: 'orders', label: 'Все города'},
        {value: 'orders2', label: 'Category 2'},
        {value: 'orders3', label: 'Category 3'},
    ];

    const defaultOption1 = {value: 'allCategories', label: 'Все Категории'};
    const defaultOption2 = {value: 'defaultCategory', label: 'Все статусы'};
    const defaultOption3 = {value: 'defaultOrder', label: 'Все Города'};

    return (
        <div className="order w-100">
            <div className="order-content">
                <div className="order-content-header">
                    <h1>Заказы</h1>
                    <div className="order-content-header-btn">
                        <Button
                            text={ <AddFile color={ '#007BFF' }/> }
                            rightIcon={ 'Выгрузить' }
                            className={ 'file' }
                        />
                    </div>
                </div>
                <div className="order-content-top">
                    <div className="order-content-top-search">
                        <TextField
                            value={ '' }
                            imgLeft={ <Search color={ '#007BFF' } size={ 27 }/> }
                            placeholder={ 'Поиск' }/>
                    </div>
                    <div className="order-content-top-select">
                        <div className="order-content-top-select-status">
                            <Select
                                isSearchable={ false }
                                options={ options2 }
                                defaultValue={ defaultOption2 }
                                className="order-content-top-select-status-all"
                            />
                        </div>
                        <div className="order-content-top-select-status">
                            <Select
                                isSearchable={ false }
                                options={ options1 }
                                defaultValue={ defaultOption1 }
                                className="order-content-top-select-status-all"
                            />
                        </div>
                        <div className="order-content-top-select-status">
                            <Select
                                isSearchable={ false }
                                options={ options3 }
                                defaultValue={ defaultOption3 }
                                className="order-content-top-select-status-all"
                            />
                        </div>
                    </div>
                </div>
                <OrderContent/>
            </div>
        </div>
    );
};

export default Order;