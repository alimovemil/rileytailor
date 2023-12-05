import React, { FC, useState } from 'react';
import Burger from "../../container/icons/Burger";
import Close from "../../container/icons/Close";

interface MenuHeaderProps {
    onClose: () => void;
    isOpen: boolean;
    onBurgerMenuClick: () => void;
}

const MenuHeader: FC<MenuHeaderProps> = ({ onClose, isOpen, onBurgerMenuClick }) => {
    const [isBurgerVisible, setBurgerVisible] = useState(true);

    const handleIconClick = () => {
        if (isBurgerVisible) {
            onBurgerMenuClick();
        } else {
            onClose();
        }
        setBurgerVisible(!isBurgerVisible);
    };

    return (
        <div className="burger-menu" onClick={handleIconClick}>
            {isBurgerVisible ? (
                <Burger color={'#1E2546'} />
            ) : (
                <div className="burger-menu-close" tabIndex={0}>
                    <Close color={'white'} />
                </div>
            )}
        </div>
    );
};

export default MenuHeader;
