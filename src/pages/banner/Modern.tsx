import React, { FC, useEffect, useState } from 'react';
import Button from "../../components/form/Button";
import { useLocation } from "react-router-dom";
import Basket from "../../container/icons/Basket";
import { useAppDispatch } from "../../redux/store";
import { CauldronsSave, } from "../../redux/reducers/basket/reduce";
import BasketAdd from "../../container/icons/BasketAdd";

const Modern: FC = () => {
    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    console.log(editedData)


    const dispatch = useAppDispatch()

    const [ addedToCart, setAddedToCart ] = useState(false);

    const [ selectedImage, setSelectedImage ] = useState<string | null>(null);


    const [ isCauldrons, setIsCauldrons ] = useState<any[]>([
        {
            imgs: '/img/png/frying_2.png',
        },
    ])

    const diameter = [
        {
            size: '24',
            key: 'size1'
        },
        {
            size: '26',
            key: 'size2'
        },
        {
            size: '28',
            key: 'size3'
        }
    ]

    const [ list, setList ] = useState<any[]>([
        {
            key: 'material',
            text: 'Материал',
            txt: 'Нержавеющая сталь'
        },
        {
            key: 'handleMaterial',
            text: 'Материал ручек',
            txt: 'Нержавеющая сталь'
        },
        {
            key: 'lid',
            text: 'Крышка',
            txt: 'Имеется'
        },
        {
            key: 'itemCount',
            text: 'Кол-во предметов',
            txt: '8шт'
        },
    ])

    useEffect(() => init(), [ location ]);

    const [ isModern, setIsModern ] = useState<any>({})

    const [ isLoading, setIsLoading ] = useState(false);

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    function init() {
        setIsLoading(true);
        // request.then(res => {
        //     if (!res) return;

        const res = {}

        // SetProductItem(res)
        // });
        fetch('')
            .then((response) => response.json())
            .then((data) => {
                setIsModern(data);
                setAddedToCart(false);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });

        setIsModern(editedData.item)
        setAddedToCart(false);
        // setIsCauldrons(editedData.item)
        setIsLoading(false);
    }


    function onClickAdd() {
        dispatch(CauldronsSave(isModern));
        setAddedToCart(true);
    }

    function onClickSize(size: string) {
        setSelectedSize(size);
    }

    return (
        <div className="modern">
            <div className="container">
                <div className="modern-item">
                    <div className="row">
                        <div className="col-12">
                            <div className="modern-item-style">
                                <div className="modern-item-style-left">
                                    <div className="modern-item-style-left-image">
                                        { selectedImage ? (
                                            <img src={ selectedImage } alt="Selected"/>
                                        ) : (
                                            <img src={ isModern.img } alt="Selected"/>
                                        ) }
                                    </div>
                                    <div className="modern-item-bottom-left">
                                        <div className="modern-item-bottom-left-cauldrons">
                                            <div className="modern-item-bottom-left-cauldrons-image">
                                                { isCauldrons.map((image, idx) => (
                                                    <div key={ idx } onClick={ () => setSelectedImage(image.imgs) }>
                                                        <img src={ image.imgs } alt=""/>
                                                    </div>
                                                )) }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modern-item-style-block">
                                    <div className="modern-item-style-block-inner">
                                        <div className={ `modern-item-style-block-name ${ isModern.className }` }>
                                            <div style={ {display: "none"} } className={ `${ isModern.class }` }>
                                                { isModern.rate }
                                            </div>
                                            <div className="modern-item-style-block-name-page">
                                                <h3>{ isModern.text }</h3>
                                                <p>{ isModern.txt }</p>
                                            </div>
                                            <div className="modern-item-style-block-name-diameter">
                                                <h4>Диаметр, см</h4>
                                                <div className="modern-item-style-block-name-diameter-size">
                                                    { diameter.map((i, idx) => (
                                                        <Button
                                                            text={ i.size }
                                                            onClick={ () => onClickSize(i.size) }
                                                            className={ `btn ${ selectedSize === i.size ? 'btn-selected' : '' }` }
                                                            key={ `modern-item-style-block-name-diameter-size-${ idx }` }
                                                        />
                                                    )) }
                                                </div>
                                            </div>

                                            <div className="modern-item-style-block-name-cost">
                                                <p>{ isModern.cost }</p>
                                                <div className="modern-item-style-block-name-cost-div">{ isModern.paragraph }</div>
                                                <h4>{ isModern.price }</h4>
                                                <span style={{ color: isModern.span !== 'Есть в наличии' ? '#AC1931' : '' }}>{isModern.span}</span>
                                            </div>

                                            <div className="modern-item-style-block-btn">
                                                <Button
                                                    text={ addedToCart ? 'Добавлено в корзину' : 'Добавить в корзину' }
                                                    onClick={ onClickAdd }
                                                    leftIcon={ addedToCart ? <BasketAdd color={ '#1E2546' }/> :
                                                        <Basket/> }
                                                    className={ addedToCart ? 'btn-added' : 'btn' }
                                                    disabled={isModern.span !== 'Есть в наличии'}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modern-item-bottom">

                                        <div className="modern-item-bottom-info">
                                            <div className="modern-item-bottom-info-header">
                                                <h3>Характеристики</h3>
                                            </div>

                                            <div className="modern-item-bottom-info-text">
                                                { list.map((item, idx) => (
                                                    <div className="modern-item-bottom-info-text-material"
                                                         key={ idx }
                                                    >
                                                        <p>{ item.text }</p>
                                                        <div className="">........</div>
                                                        <span>{ item.txt }</span>
                                                    </div>
                                                )) }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Modern;