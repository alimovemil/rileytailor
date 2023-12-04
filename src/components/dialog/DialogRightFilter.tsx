// DialogRightFilter.tsx

import React, { FC, ReactNode, useEffect, useRef } from "react";

interface DialogProps {
    children: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}

const DialogRightFilter: FC<DialogProps> = ({ children, isOpen, closeModal }) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                closeModal();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, closeModal]);

    const handleInsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <>
            {isOpen && (
                <div className="dialog__right__containers" onClick={closeModal}>
                    <div
                        ref={dialogRef}
                        className="dialog-container dialog-fullscreen"
                        onClick={handleInsideClick}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default DialogRightFilter;
