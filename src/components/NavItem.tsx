import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
    link: string;
    icon: string | React.ReactElement;
    title: string;
}

const NavItem: FC<NavItemProps> = ({link, icon, title}) => {
    return (
        <>
            <NavLink
                to={ link }
                className={ ({isActive}) =>
                    (isActive ? "nav-link current" : "nav-link") }
            >
                <div className="nav-item">
                    { typeof icon === 'string' ? (
                        <div className="icon">
                            <img src={ icon } alt="nav-icon"/>
                        </div>
                    ) : (
                        <div className="icon">
                            { icon }
                        </div>
                    ) }

                    <div className='title'>
                        { title }
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default NavItem;
