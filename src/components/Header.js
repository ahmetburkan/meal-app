import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SurpriseBox from "../assets/images/surprise-box.png";
import Logo from "../assets/images/logo.png";
import { ThemeContext } from '../context/ThemeContextProvider';
import { AuthContext } from "../context/AuthContextProvider";
import Image from './Image';

const Header = () => {
    const {setOverlay, overlay } = useContext(ThemeContext);
    const { logout } = useContext(AuthContext)

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

                <div className="header-inner-logo"><a href="/"><Image src={Logo} alt='Logo'/></a></div>

                <div className='header-inner-hamburger' onClick={toggleOverlay}>
                    <div className="header-inner-hamburger-bar"></div>
                    <div className="header-inner-hamburger-bar"></div>
                    <div className="header-inner-hamburger-bar"></div>
                </div>

                <div className="header-inner-menu">
                    <div className="header-inner-menu-wrapper">
                        <div className="header-inner-menu-wrapper-left">
                            <NavLink onClick={toggleOverlay} className={(navData) => navData.isActive ? "active" : "" } to="/area">Area list</NavLink>
                            <NavLink onClick={toggleOverlay} className={(navData) => navData.isActive ? "active" : "" } to="/category">Category list</NavLink>
                            <NavLink onClick={toggleOverlay} className={(navData) => navData.isActive ? "active" : "" } to="/ingredient">Ingredient list</NavLink>
                            <NavLink onClick={toggleOverlay} className={(navData) => navData.isActive ? "active" : "" } to="/random"><span className='logo-link'>Random <Image src={SurpriseBox} alt='Suprise Box'/></span></NavLink>
                            <NavLink onClick={toggleOverlay} className={(navData) => navData.isActive ? "active" : "" } to="/my-account">My account</NavLink>
                        </div>
                        <div className="header-inner-menu-wrapper-right">
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;