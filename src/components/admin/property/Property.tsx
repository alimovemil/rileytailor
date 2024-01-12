import React, { FC, useState } from 'react';
import Button from "../../../components/form/Button";
import Plus from "../../../container/icons/Plus";
import TextField from "../../../components/form/TextField";
import Search from "../../../container/icons/Search";
import Pen from "../../../container/icons/Pen";
import Tick from "../../../container/icons/Tick";
import Delete from "../../../container/icons/Delete";
import Close from "../../../container/icons/Close";
import PropertyColor from "../../../components/admin/property/PropertyColor";

const Property: FC = () => {

    const [ isItem, setIsItem ] = useState<any[]>([
        {
            text: '250 мл',
            isEditing: false
        },
        {
            text: '300 мл',
            isEditing: false
        },
        {
            text: '450 мл',
            isEditing: false
        },
        {
            text: '550 мл',
            isEditing: false
        },
        {
            text: '150 мл',
            isEditing: false
        },
        {
            text: '220 мл',
            isEditing: false
        },
        {
            text: '290 мл',
            isEditing: false
        },
        {
            text: '950 мл',
            isEditing: false
        },
        {
            text: '620 мл',
            isEditing: false
        },
        {
            text: '750 мл',
            isEditing: false
        },
    ])

    const [isAddingItem, setIsAddingItem] = useState(false);

    const [newItemText, setNewItemText] = useState('');

    const handleInputChange = (value: string) => {
        setNewItemText(value);
    };


    const handleEditClick = (index: number) => {
        const updatedIsItem = [...isItem];
        updatedIsItem[index].isEditing = true;
        setIsItem(updatedIsItem);
    };

    const handleSaveClick = (index: number, newText: string) => {
        const updatedIsItem = [...isItem];
        updatedIsItem[index].text = newText;
        updatedIsItem[index].isEditing = false;
        setIsItem(updatedIsItem);
        setIsAddingItem(false)
    };

    const handleCancelClick = (index: number) => {
        const updatedIsItem = [...isItem];
        if (isAddingItem) {
            updatedIsItem.shift();
            setIsAddingItem(false);
        } else {
            updatedIsItem[index].isEditing = false;
        }
        setIsItem(updatedIsItem);
    };

    const handleDeleteClick = (index: number) => {
        const updatedIsItem = [...isItem];
        updatedIsItem.splice(index, 1);
        setIsItem(updatedIsItem);
    };

    const handleAddClick = () => {
        setIsAddingItem(true);
        setNewItemText('');
        const newItem = {
            text: '',
            isEditing: true,
        };
        setIsItem([newItem, ...isItem]);
    };

    return (
        <div className="property">
            <div className="property-content">
                <div className="property-header">
                    <h1>Свойства товаров</h1>
                </div>
                <div className="property-content-item">
                    <div className="property-content-item-left">
                        <div className="property-content-item-left-top">
                            <h3>Свойства товара</h3>
                            {!isAddingItem && (
                                <Button
                                    text={<Plus color="#007BFF" size={20} />}
                                    rightIcon="Добавить"
                                    className="btn-top"
                                    onClick={handleAddClick}
                                />
                            )}
                        </div>
                        <div className="property-content-item-left-search">
                            <TextField
                                value={ '' }
                                placeholder={ 'Поиск' }
                                imgLeft={ <Search color={ '#007BFF' } size={30}/> }
                            />
                        </div>
                        <div className={`property-content-item-inner ${isItem.length <= 4 ? 'full-height' : ''}`}>
                            {isItem.map((item, idx) => (
                                <div
                                    className={`property-content-item-inner-meta ${item.isEditing ? 'editing' : ''}`}
                                    key={`property-content-item-inner-meta-${idx}`}
                                >
                                    {item.isEditing ? (
                                        <form
                                            className="property-content-item-inner-meta-modify"
                                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                                e.preventDefault();
                                                handleSaveClick(idx, (e.target as HTMLFormElement).propertyValue.value);
                                            }}
                                        >
                                            <input
                                                type="text"
                                                name="propertyValue"
                                                defaultValue={item.text}
                                                placeholder="Введите название свойства"
                                                onChange={(e) => handleInputChange(e.target.value)}
                                            />
                                            <div className="property-content-item-inner-meta-modify-setting">
                                                <Button
                                                    text={<Tick color={'#00982B'} size={20} />}
                                                    type="button"
                                                    className="btn-tick"
                                                    disabled={!newItemText.trim()}
                                                    onClick={() => {
                                                        handleSaveClick(idx, newItemText);
                                                    }}
                                                />

                                                {!isAddingItem && item.isEditing && (
                                                    <Button
                                                        text={<Delete color={'#F20000'} size={20} />}
                                                        className="btn-tick"
                                                        onClick={() => handleDeleteClick(idx)}
                                                    />
                                                )}
                                                <Button
                                                    text={<Close color={'#000000'} height={20} width={20}/>}
                                                    onClick={() => handleCancelClick(idx)}
                                                    className="btn-tick"
                                                />
                                            </div>
                                        </form>
                                    ) : (
                                        <>
                                            <p>{item.text}</p>
                                            <Button
                                                className="btn-pen"
                                                text={<Pen color={'#007BFF'} />}
                                                onClick={() => handleEditClick(idx)}
                                            />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <PropertyColor/>
                </div>
            </div>


        </div>
    );
};

export default Property;