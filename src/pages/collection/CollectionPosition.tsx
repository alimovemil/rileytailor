import React, { FC, useEffect, useRef, useState } from 'react';
import Button from "../../components/form/Button";
import Filter from "../../container/icons/Filter";
import Close from "../../container/icons/Close";
import FilterInput from "../../components/pages-2/FilterInput";

const CollectionPosition: FC = () => {
    const [filter, setFilter] = useState(false);
    const [isDialog, setIsDialog] = useState(false);

    const buttonRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setFilter(false);
            setIsDialog(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const onClickFilter = () => {
        setFilter((prevFilter) => !prevFilter);
        setIsDialog((prevIsDialog) => !prevIsDialog);
    };

    return (
        <>
            <FilterInput
                isOpen={isDialog}
                setIsOpen={() => {
                    setIsDialog(false);
                    setFilter(false);
                }}
            />
            <div className="collection-top-position">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="collection-top-position-meta">
                                <h3>Всего: 28 позиций</h3>
                                <div className="collection-top-position-meta-filter" ref={buttonRef}>
                                    <Button
                                        text={'Фильтр'}
                                        leftIcon={
                                            filter ? (
                                                <Close height={24} width={24} color={'#FFFFFF'} />
                                            ) : (
                                                <Filter color={'#1E2546'} size={24} />
                                            )
                                        }
                                        className={filter ? 'btn-meta btn' : 'btn-inner btn'}
                                        onClick={onClickFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionPosition;
