import React, { FC, useState } from 'react';
import Button from "../../components/form/Button";
import Filter from "../../container/icons/Filter";
import { useNavigate } from "react-router-dom";
import Close from "../../container/icons/Close";
import FilterInput from "../../components/pages-2/FilterInput";

const CollectionPosition: FC = () => {

    const navigate = useNavigate()

    const [ filter, setFilter ] = useState(false)

    const [ isDialog, SetIsDialog ] = useState(false)

    function onClickFilter() {
        navigate('')
        setFilter(!filter)
        SetIsDialog(!isDialog)
    }

    return (
        <div className="collection-top-position">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="collection-top-position-meta">
                            <h3>Всего: 28 позиций</h3>
                            <div className="collection-top-position-meta-filter">
                                <Button text={ 'Фильтр' }
                                        leftIcon={ filter ? <Close height={ 24 } width={ 24 } color={ '#FFFFFF' }/> :
                                            <Filter color={ '#1E2546' } size={ 24 }/> }
                                        className={ filter ? 'btn-meta btn' : 'btn-inner btn' }
                                        onClick={ onClickFilter }
                                />
                                <FilterInput
                                    isOpen={isDialog}
                                    setIsOpen={() => {
                                        SetIsDialog(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionPosition;