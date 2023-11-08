import {FC, ReactNode} from "react";
import Close from "../../container/icons/Close";

const customStyles = {
    paddingTop: '30px',
    backgroundColor:  '#ffff',
    zIndex: '5',
    overflow: 'auto'
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
                    className={'dialog__right__container'}
                    onClick={closeModalLocal}
                >
                    <div className="dialog__right__block z-enter-done z-enter-active"
                         style={{
                             ...customStyles,
                             position: 'fixed',
                             width: `${widthProps / 16}rem`
                         }}
                    >
                        {(label || isShowCloseBtn) && (
                            <div className="modal__block-header">
                                {label && (
                                    <p>{label}</p>
                                )}

                                {isShowCloseBtn && (
                                    <button
                                        onClick={closeModalLocal}
                                        className={'modal__block-close'}
                                    >
                                        { closeIcon }
                                    </button>
                                )}
                            </div>
                        )}

                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default DialogRightByContent;
