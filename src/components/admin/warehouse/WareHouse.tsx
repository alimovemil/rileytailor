import React, { FC, useState } from 'react';
import Button from '../../../components/form/Button';
import AddFile from '../../../container/icons/AddFile';
import UnLoading from '../../../container/icons/UnLoading';
import TextField from '../../../components/form/TextField';
import Select from 'react-select';
import Search from "../../../container/icons/Search";
import Switch from "../../../components/form/ToogleBox";
import ArrowBottom from "../../../container/icons/ArrowBottom";
import Pen from "../../../container/icons/Pen";
import Pagination from "../../../components/form/Pagination";

const WareHouse: FC = () => {

    const [ isWareHouse, setIsWareHouse ] = useState<any[]>([
        {
            text: '1094895-1',
            additionalArray: [
                {
                    span: 'Товар',
                    name: 'Бутылка для воды «Ресурсный источник»',
                    class: 'name'
                },
                {
                    span: 'Свойство',
                    name: '250 мл',
                    class: 'names'
                },
                {
                    span: 'Кол-во (шт)',
                    name: '30',
                    class: 'number'
                }
            ]
        },
        {
            text: '1094895-2',
            additionalArray: [
                {
                    span: 'Товар',
                    name: 'Кастрюля',
                    class: 'name'
                },
                {
                    span: 'Свойство',
                    name: '450 мл',
                    class: 'names'
                },
                {
                    span: 'Кол-во (шт)',
                    name: '70',
                    class: 'number'
                }
            ]
        },
        {
            text: '1094895-3',
            additionalArray: [
                {
                    span: 'Товар',
                    name: 'Кастрюля',
                    class: 'name'
                },
                {
                    span: 'Свойство',
                    name: '550 мл',
                    class: 'names'
                },
                {
                    span: 'Кол-во (шт)',
                    name: '90',
                    class: 'number'
                }
            ]
        },
        {
            text: '1094895-4',
            additionalArray: [
                {
                    span: 'Товар',
                    name: 'loft',
                    class: 'name'
                },
                {
                    span: 'Свойство',
                    name: '960 мл',
                    class: 'names'
                },
                {
                    span: 'Кол-во (шт)',
                    name: '10',
                    class: 'number'
                }
            ]
        },
    ])

    const [activePage, setActivePage] = useState<number>(1);
    const productsPerPage = 10;

    const startIndex = (activePage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = isWareHouse.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    const options1 = [
        {value: 'option1', label: 'Все Категории'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
        {value: 'option3', label: 'Option 3'},
        {value: 'option3', label: 'Option 3'},
    ];

    const options2 = [
        {value: 'category1', label: 'Category 1'},
        {value: 'category2', label: 'Category 2'},
        {value: 'category3', label: 'Category 3'},
    ];

    const defaultOption1 = {value: 'allCategories', label: 'Все Категории'};
    const defaultOption2 = {value: 'defaultCategory', label: 'Все статусы'};

    return (
        <div className="warehouse">
            <div className="warehouse-content">
                <div className="warehouse-content-header">
                    <h1>Склад</h1>
                    <div className="warehouse-content-header-btn">
                        <Button text={ <AddFile color={ '#007BFF' }/> } className={ 'btn-file' }
                                rightIcon={ 'Загрузить' }/>
                        <Button text={ <UnLoading color={ '#007BFF' }/> } className={ 'btn-file' }
                                rightIcon={ 'Выгрузить' }/>
                    </div>
                </div>
                <div className="warehouse-content-top">
                    <div className="warehouse-content-top-search">
                        <TextField
                            value={ '' }
                            imgLeft={ <Search color={ '#007BFF' } size={ 27 }/> }
                            placeholder={ 'Поиск' }
                        />
                    </div>
                    <div className="warehouse-content-top-status">
                        <div className="warehouse-content-top-status-all">
                            <Select
                                options={ options1 }
                                defaultValue={ defaultOption1 }
                                className="warehouse-content-top-status-all-select"
                                isSearchable={ false }
                            />
                        </div>
                        <div className="warehouse-content-top-status-all">
                            <Select
                                options={ options2 }
                                defaultValue={ defaultOption2 }
                                className="warehouse-content-top-status-all-select is-open"
                                isSearchable={ false }
                            />
                        </div>
                    </div>
                </div>
                <div className="warehouse-content-item">
                        { displayedProducts.map((item, idx) => (
                            <div key={ `item-${ idx }` } className="warehouse-content-item-meta">
                                <p className="warehouse-content-item-meta-paragraph">{ item.text }</p>
                                <div className="warehouse-content-item-meta-info">
                                    { item.additionalArray.map((additionalItem: any, additionalIdx: number) => (
                                        <div className={`warehouse-content-item-meta-info-product ${additionalItem.class}`}
                                             key={ `warehouse-content-item-meta-info-product-${ additionalIdx }` }>
                                            <p>{ additionalItem.span }</p>
                                            <span>{ additionalItem.name }</span>
                                        </div>
                                    )) }
                                </div>
                                <div className="warehouse-content-item-meta-switch">
                                    <div className="warehouse-content-item-meta-switch-double">
                                        <Switch/>
                                        <Pen color={'#007BFF'}/>
                                    </div>
                                    <Button
                                        text={<ArrowBottom color={'#003166'}/>}
                                        className={'btn-arrow'}
                                    />
                                </div>
                            </div>
                        )) }
                </div>
                <Pagination
                    setActivePage={handlePageChange}
                    activePage={activePage}
                    pages={Math.ceil(isWareHouse.length / productsPerPage)}
                />
            </div>
        </div>
    );
};

export default WareHouse;
