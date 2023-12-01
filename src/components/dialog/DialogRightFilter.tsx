import { FC, ReactNode } from "react";

interface Dialog {
    children: ReactNode
    isOpen: boolean
    setIsOpen?: (is: boolean) => void
    closeModal: () => void
}

const DialogRightByContent: FC<Dialog> = (
    {
        children,
        isOpen,
        setIsOpen,
    }
) => {

    function handleDialogClick(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation();
        setIsOpen && setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div
                    className={'dialog__right__containers'}
                    onClick={handleDialogClick}
                >
                    {children}
                </div>
            )}
        </>
    )
}

export default DialogRightByContent;
