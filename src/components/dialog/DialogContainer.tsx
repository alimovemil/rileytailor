import { FC, ReactNode } from "react";
import Modal from 'react-modal';
import Close from "../../container/icons/Close";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    },
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
    classNameHeader?: string
    classNameModal?: string
}

const DialogContainer: FC<Dialog> = (
    {
        children,
        isOpen,
        setIsOpen,
        closeModal,
        styles,
        label,
        widthProps = 600,
        isShowCloseBtn = true,
        closeIcon = <Close/>,
        classNameHeader,
        classNameModal
    }
) => {

    let subtitle: any;

    function afterOpenModal() {
        if (subtitle) subtitle.style.color = 'red';
    }

    function closeModalLocal() {
        setIsOpen && setIsOpen(false);

        closeModal();
    }

    return (
        <>
            <Modal
                closeTimeoutMS={ 300 }
                isOpen={ isOpen }
                onAfterOpen={ afterOpenModal }
                onRequestClose={ closeModalLocal }
                style={ {
                    ...customStyles,
                    content: {
                        maxWidth: `${ widthProps / 16 }rem`
                    }
                }}
                ariaHideApp={false}
                contentLabel={label}
                className={`modal__block ${classNameModal}`}
                overlayClassName={'modal__container'}
            >
                { (label || isShowCloseBtn) && (
                    <div className={ `modal__block-headers ${ classNameHeader }` }>
                        { label && (
                            <p>{ label }</p>
                        ) }

                        { isShowCloseBtn && (
                            <button
                                onClick={ closeModalLocal }
                                className={ 'modal__block-close' }
                            >
                                {closeIcon}
                            </button>
                        ) }
                    </div>
                ) }

                { children }
            </Modal>
        </>
    )
}

export default DialogContainer;
