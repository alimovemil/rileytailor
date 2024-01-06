import React, { FC, useCallback, useEffect, useState } from 'react';
import TextField from "../../components/form/TextField";
import Search from "../../container/icons/Search";
import Button from "../../components/form/Button";
import Person from "../../container/icons/Person";
import HeaderOpen from "../../components/header/headerOpen";
import Basket from "../../container/icons/Basket";
import MenuHeader from "../../components/header/menuHeader";
import HeaderBasket from "../../components/header/HeaderBasket";
import { CSSTransition } from "react-transition-group";
import ProductItem from "../../components/product/product";
import Logo from "../../container/icons/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetCauldrons, updateBasketInfo } from "../../redux/reducers/basket/basketRe";
import { RootState, useAppDispatch, } from "../../redux/store";
import { selectIsAuthenticated } from "../../redux/reducers/auth/authReducer";
import ProductData from "../../container/productArray/ProductArray";
import Spinner from "../../container/icons/Spinner";
import { startLoading, stopLoading } from "../../redux/slices/loadingSlice";

interface HeaderProps {
    isCheckoutPage?: boolean;
}

const Header: FC<HeaderProps> = ({isCheckoutPage}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const productsInBasket = useSelector(GetCauldrons);
    const totalPrice = useSelector((state: RootState) => state.profile.totalPrice);
    const totalItems = useSelector((state: RootState) => state.profile.totalItems);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const [ isModal, setIsModal ] = useState(false);
    const [ isDialog, SetIsDialog ] = useState(false)
    const [ isProductItemVisible, setProductItemVisible ] = useState(false);
    const [ profileButtonText, setProfileButtonText ] = useState('Войти');

    const handleBurgerMenuClick = () => {
        setProductItemVisible(!isProductItemVisible);
    };

    const calculateTotalPrice = useCallback(() => {
        dispatch(updateBasketInfo());
    }, [ dispatch ]);

    const [ isField, setIsField ] = useState<any[]>([
        {
            value: '',
            setValue: (value: string, key: string) => onChangeSetValue(value, key),
            key: 'fields'
        }
    ])

    useEffect(() => {
        calculateTotalPrice();
    }, [ productsInBasket, calculateTotalPrice, dispatch ]);

    useEffect(() => {
        setProfileButtonText(isAuthenticated ? 'Мой профиль' : 'Войти');
    }, [ isAuthenticated ]);

    const onChangeSetValue = (value: string, key: string) => {
        const listUpdate = [ ...isField ].map((i) => {
            if (i.key === key) {
                i.value = value;
            }
            return i;
        });

        setIsField(listUpdate);
    };

    const [ isSearchVisible, setSearchVisible ] = useState(false);

    const [ , setSearchResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);


    const onChangeSearchValue = (value: string) => {
        setSearchValue(value);
        setSearchVisible(value !== '');
        setIsLoading(true);

        setTimeout(() => {
            const filteredData = ProductData.filter((item) =>
                item.text.toLowerCase().includes(value.toLowerCase())
            );
            // @ts-ignore
            setSearchResults(filteredData);
            setIsLoading(false);
        }, 2000);
    };

    const [ searchValue, setSearchValue ] = useState('');

    const filteredProductData = ProductData.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const onClickModal = () => {
        setIsModal(true);
    }

    const onClickDialog = () => {
        SetIsDialog(true);
    }

    const onClickHome = () => {
        navigate('/');
    };

    function onClickPage(item: any) {
        dispatch(startLoading());
        const {rate, ...itemWithoutRate} = item;

        const updatedItem = {
            ...itemWithoutRate,
            span: item.key === '2' && item.span === 'Есть в наличии' ? 'Нет в наличии' : item.span,
        };

        const updatedData = ProductData.map((dataItem) =>
            dataItem.key === updatedItem.key ? updatedItem : dataItem
        );

        navigate(`product/${ item.key }`, {
            state: {
                data: {
                    item: updatedItem,
                },
            },
        });

        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }

    return (
        <div className="header">
            <MenuHeader
                onClose={ handleBurgerMenuClick }
                isOpen={ isProductItemVisible }
                onBurgerMenuClick={ handleBurgerMenuClick }
            />

            { isProductItemVisible && <ProductItem/> }
            <div className="container">
                <div className="row">
                    <div className="col-12 header-style">
                        <div className="header-top">
                            <div className="header-top-logo">
                                <Button text={ <Logo color={ '#AC1931' }/> }
                                        onClick={ onClickHome }
                                        className={ 'btn' }
                                />
                            </div>

                            <div className="header-input">
                                { isCheckoutPage
                                    ? null
                                    : isField.map((item, idx) => (
                                        <TextField
                                            key={ idx }
                                            value={ item.value || '' }
                                            type={ 'type' }
                                            placeholder={ 'Поиск' }
                                            imgRight={ <Search color={ '#1E2546' }/> }
                                            onChangeValue={ (value) => {
                                                item.setValue(value, item.key);
                                                onChangeSearchValue(value);
                                            } }
                                        />
                                    )) }
                            </div>

                            <div className="header-top-search">
                                { isSearchVisible && (
                                    <div className="header-top-search-product">
                                        { isLoading ? (
                                            <div className="spinner-container">
                                                <Spinner/>
                                            </div>
                                        ) : (
                                            filteredProductData.map((item, idx) => (
                                                <div
                                                    className="header-top-search-product-item"
                                                    key={ `header-top-search-product-item-${ idx }` }
                                                    onClick={ () => {
                                                        onClickPage(item)
                                                    } }
                                                >
                                                    <div className="header-top-search-product-item"
                                                         key={ `header-top-search-product-item-${ idx }` }>
                                                        <div className="header-top-search-product-item-inner">
                                                            <div className="header-top-search-product-item-inner-img"

                                                            >
                                                                <img src={ item.img } alt=""/></div>
                                                            <div
                                                                className="header-top-search-product-item-inner-description">
                                                                <p>{ item.text }</p>
                                                                <div
                                                                    className={ `header-top-search-product-item-inner-description-price ${ item.className }` }>
                                                                    <div>{ item.paragraph }</div>
                                                                    <span>{ item.price }</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) }
                                    </div>
                                ) }

                            </div>
                            <div className="header-top-item">
                                <div className="header-top-item-contact">
                                    <p>Наш номер телефона</p>
                                    <a href="tel:+998 71 123-45-67">+998 71 123-45-67</a>
                                </div>
                                <div className="header-top-item-profile">
                                    <Button
                                        text={ profileButtonText }
                                        onClick={ () => {
                                            isAuthenticated ? navigate('/sign') : onClickModal();
                                        } }
                                        leftIcon={ <Person color={ '#1E2546' }/> }
                                        className="header-btn"
                                    />
                                </div>
                                <div className="header-top-item-basket">
                                    { isCheckoutPage ? null : (
                                        <>
                                            <Button
                                                text={ totalItems }
                                                onClick={ onClickDialog }
                                                leftIcon={ <Basket/> }
                                                className={ 'header-top-item-basket-btns' }
                                            />
                                            <div className="header-top-item-basket-uzs">
                                                <p>Корзина</p>
                                                <span>{ totalPrice.toLocaleString('ru-RU') } UZS</span>
                                            </div>
                                        </>
                                    ) }
                                </div>

                            </div>
                            <HeaderOpen
                                setIsShow={ () => {
                                    setIsModal(false)
                                } }
                                isShow={ isModal }
                            />

                            <CSSTransition
                                in={ isDialog }
                                timeout={ 200 }
                                classNames="z"
                                unmountOnExit
                            >
                                <HeaderBasket
                                    isOpen={ isDialog }
                                    setIsOpen={ () => {
                                        SetIsDialog(false)
                                    } }
                                />
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-border"/>
        </div>
    );
};

export default Header;
