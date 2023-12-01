import {FC, ReactNode} from "react";
import Close from "../../container/icons/Close";

const customStyles = {
    paddingTop: '15px',
    backgroundColor:  '#ffff',
    zIndex: '5',
    overflow: 'auto',
};

interface Dialog {
    children: ReactNode
    isOpen: boolean
    setIsOpen?: (is: boolean) => void
    closeModal: () => void
    styles?: any
    label?: string
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
        isShowCloseBtn = true,
        closeIcon = <Close/>
    }
) => {

    function closeModalLocal() {
        setIsOpen && setIsOpen(false);

        closeModal();
    }

    function handleDialogClick(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation();
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
                         }}
                         onClick={handleDialogClick}
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
