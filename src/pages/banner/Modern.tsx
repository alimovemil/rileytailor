import React, { FC, useEffect, useState } from 'react';
import Button from "../../components/form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Basket from "../../container/icons/Basket";
import Percent from "../../container/icons/percent";
import Eye from "../../container/icons/Eye";
import { useAppDispatch } from "../../redux/store";
import { CauldronsSave, } from "../../redux/reducers/basket/reducer";
import BasketAdd from "../../container/icons/BasketAdd";

type ImageBlockProps = {
    src: string;
    alt: string;
    onClick: (src: string) => void;
};

const ImageBlock: React.FC<ImageBlockProps> = ({src, alt, onClick}) => (
    <img src={ src } alt={ alt } onClick={ () => onClick(src) }/>
);

const Modern: FC = () => {
    const location = useLocation();
    const state: any = location.state;
    const editedData = state?.data || {};

    const dispatch = useAppDispatch()

    const [productItem, SetProductItem] = useState({
        img: '/img/png/cauldrons_1.png',
        text: 'Набор из 8 предм.Modern 102308',
        txt: 'Артикул: 102308',
        cost: 'Стоимость',
        price: '987 000 UZS',
        span: 'Есть в наличии',
    })

    function onClickAdd() {
        dispatch(CauldronsSave(productItem));
        setAddedToCart(true);
    }


    const navigate = useNavigate()

    const [addedToCart, setAddedToCart] = useState(false);

    const [ selectedImage, setSelectedImage ] = useState('/img/png/frying_2.png');

    const [ isCauldrons, setIsCauldrons ] = useState<any>([
        {
            img: '/img/png/frying_2.png',
        },
        {
            img: '/img/png/frying_1.png',
        },
    ])

    const [ list, setList ] = useState<any[]>([
        {
            key: '',
            text: 'Материал',
            txt: 'Нержавеющая сталь'
        },
        {
            key: '',
            text: 'Материал ручек',
            txt: 'Нержавеющая сталь'
        },
        {
            key: '',
            text: 'Крышка',
            txt: 'Имеется'
        },
        {
            key: '',
            text: 'Кол-во предметов',
            txt: '8шт'
        },
    ])

    useEffect(() => init(), []);


    const [ isModern, setIsModern ] = useState<any>({})

    useEffect(() => init(), [])

    function init() {
        // request.then(res => {
        //     if (!res) return;

            const res = {}


            // SetProductItem(res)
        // });

        setIsModern(editedData.item)
        setIsCauldrons(editedData.item)
    }

    function onClickCheckOut() {
        navigate('product')
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
                                        { selectedImage && <img src={ selectedImage } alt="Selected"/> }
                                    </div>
                                </div>

                                <div className="modern-item-bottom-left">
                                    <div className="modern-item-bottom-left-cauldrons">
                                        <ImageBlock src={ isModern.img } alt=""
                                                    onClick={ setSelectedImage }/>
                                    </div>
                                </div>

                                {/*<div className="modern-item-style-left">*/ }
                                {/*    <div className="modern-item-style-left-image">*/ }
                                {/*        <img src="/img/png/modernsImg.png" alt=""/>*/ }
                                {/*    </div>*/ }
                                {/*</div>*/ }
                                {/*<div className="modern-item-bottom-left">*/ }

                                {/*    { isCauldrons.map((image, idx) => (*/ }
                                {/*        <div className="modern-item-bottom-left-cauldrons"*/ }
                                {/*             key={ idx }*/ }
                                {/*        >*/ }
                                {/*            <img src={ image.img } alt=""/>*/ }
                                {/*        </div>*/ }
                                {/*    )) }*/ }

                                {/*</div>*/ }

                                <div className="modern-item-style-block">
                                    <div className="modern-item-style-block-inner">
                                        <div className={ `modern-item-style-block-name ${ isModern.className }` }>
                                            <div>{ isModern.rate }</div>
                                            <div className="modern-item-style-block-name-page">
                                                <h3>{ isModern.text }</h3>
                                                <p>{ isModern.txt }</p>
                                            </div>

                                            <div className="modern-item-style-block-name-cost">
                                                <div className="modern-item-style-block-name-cost-div">{ isModern.paragraph }</div>
                                                <h4>{ isModern.price }</h4>
                                                <span>{ isModern.span }</span>
                                            </div>

                                            <div className="modern-item-style-block-btn">
                                                <Button
                                                    text={addedToCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
                                                    onClick={onClickAdd}
                                                    leftIcon={addedToCart ? <BasketAdd color={'#1E2546'}/> : <Basket />}
                                                    className={addedToCart ? 'btn-added' : 'btn'}
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