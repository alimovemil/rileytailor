import React, { FC,     ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
    link: string;
    icon: string | React.ReactElement;
    title: string;
    img?: ReactElement
}

const NavItem: FC<NavItemProps> = ({ link, icon, title, img }) => {
    return (
        <>
            <NavLink
                to={link}
                className={({ isActive }) =>
                    isActive ? 'nav-link current' : 'nav-link'
                }
            >
                <div className="nav-list">
                    <div className="nav-item">
                        {typeof icon === 'string' ? (
                            <div className="icon">
                                <img src={icon} alt="nav-icon" />
                            </div>
                        ) : (
                            <div className="icon">{icon}</div>
                        )}

                        <div className="title">{title}</div>
                    </div>
                    <div>{img}</div>
                </div>
            </NavLink>
        </>
    );
};

export default NavItem;
