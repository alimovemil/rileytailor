import React, { FC } from 'react';
import DialogContainer from "../dialog/DialogContainer";
import Close from "../../container/icons/Close";

interface HeaderOpenProps {
    isShow: boolean
    setIsShow: () => void
}

const HeaderOpen: FC<HeaderOpenProps> = (
    {
        isShow,
        setIsShow
    }
) => {
    return (
        <DialogContainer
            isOpen={ isShow }
            closeModal={ () => {
                setIsShow()
            } }
            closeIcon={ <Close/> }
            label={ 'Вход' }
        >
            <div className="form-block">
                <label htmlFor="username">Имя пользователя или Email</label>
            </div>
        </DialogContainer>
    );
};

export default HeaderOpen;