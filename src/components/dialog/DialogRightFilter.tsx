import {FC, ReactNode} from "react";
import Close from "../../container/icons/Close";

const customStyles = {
    top: 0,
    right: 0,
    bottom: 0,
    padding: '20px',
    background: '#292A2F',
};

interface Dialog {
    children: ReactNode
    isOpen: boolean
    setIsOpen?: (is: boolean) => void
    closeModal: () => void
    styles?: any
    label?: string
    widthProps?: number
    isShowCloseBtn?: boolean
    closeIcon?: ReactNode
}

const DialogRightByContent: FC<Dialog> = (
    {
        children,
        isOpen,
        setIsOpen,
        closeModal,
        styles,
        label,
        widthProps = 500,
        isShowCloseBtn = true,
        closeIcon = <Close/>
    }
) => {

    function closeModalLocal() {
        setIsOpen && setIsOpen(false);

        closeModal();
    }

    return (
        <>
            {isOpen && (
                <div
                    className={'dialog__right__containers'}
                    onClick={closeModalLocal}
                >


                        {children}
                </div>
            )}
        </>
    )
}

export default DialogRightByContent;
