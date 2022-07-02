import React from 'react';
import SurpriseBox from "../assets/images/surprise-box.png";
import Logo from "../assets/images/logo.png";

const Header = (props) => {

    const toggleOverlay = () => {
        if (props.overlay === null) {
            props.setOverlay('main-menu-active');
        } else {
            props.setOverlay(null);
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
                            <a href="/country">Country list</a>
                            <a href="/category">Category list</a>
                            <a href="/random"><span className='logo-link'>Random <img src={SurpriseBox} alt='Suprise Box'/></span></a>
                        </div>
                        <div className="header-inner-menu-wrapper-right">
                            <a href="/my-account">My account</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;