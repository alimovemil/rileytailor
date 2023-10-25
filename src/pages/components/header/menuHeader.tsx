import React, { FC } from 'react';

interface MobileMenuProps {
    onClose: () => void
    isOpen: boolean
}

const MenuHeader: FC<MobileMenuProps> = (
    {
        onClose,
        isOpen
    }
) => {
    return (
        <div>
            <div className="burger-menu" onClick={onClose}>
                <img src="/img/png/burger.svg" alt=""/>
            </div>
        </div>
    );
};

export default MenuHeader;