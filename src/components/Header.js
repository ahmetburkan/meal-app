import React from 'react';
import { NavLink } from 'react-router-dom';
import SurpriseBox from "../assets/images/surprise-box.png";
import Logo from "../assets/images/logo.png";

const Header = ({overlay, setOverlay}) => {

    const toggleOverlay = () => {
        if (overlay === null) {
            setOverlay('main-menu-active');
        } else {
            setOverlay(null);
        }
    };

    return (
        <header className='header'>
            <div className="header-inner">

                <div className="header-inner-logo">
                    <a href="/"><img src={Logo} alt='Suprise Box'/></a>
                </div>

                <div className='header-inner-hamburger' onClick={toggleOverlay} >
                    <div className="header-inner-hamburger-bar"></div>
                    <div className="header-inner-hamburger-bar"></div>
                    <div className="header-inner-hamburger-bar"></div>
                </div>

                <div className="header-inner-menu">
                    <div className="header-inner-menu-wrapper">
                        <div className="header-inner-menu-wrapper-left">
                            <NavLink activeClassName="active" to="/country">Country list</NavLink>
                            <NavLink activeClassName="active" to="/category">Category list</NavLink>
                            <NavLink activeClassName="active" to="/random"><span className='logo-link'>Random <img src={SurpriseBox} alt='Suprise Box'/></span></NavLink>
                        </div>
                        <div className="header-inner-menu-wrapper-right">
                            <NavLink activeClassName="active" to="/my-account">My account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;