import React from "react";
import { NavLink } from 'react-router-dom';
import SurpriseBox from '../assets/images/surprise-box.png';
import Instagram from '../assets/images/instagram.svg';
import Facebook from '../assets/images/facebook.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Image from './Image';

const Footer = () => {
    return (
            <footer className='footer'>
                <div className='footer-inner'>
                    <div className='footer-inner-block'>
                        <h5>Menu</h5>
                        <ul className="footer-inner-block-list">
                            <li className="footer-inner-block-list-item"><NavLink to="/random"><span className='logo-link'>Random<Image src = {SurpriseBox} alt = "Suprise box logo"/></span></NavLink></li>
                            <li className="footer-inner-block-list-item"><NavLink to="/Area">Area list</NavLink></li>
                            <li className="footer-inner-block-list-item"><NavLink to="/category">Category list</NavLink></li>
                            <li className="footer-inner-block-list-item"><NavLink to="/ingredient">Ingredient list</NavLink></li>
                            <li className="footer-inner-block-list-item"><NavLink to="/my-account">My account</NavLink></li>
                        </ul>
                    </div>

                    <div className='footer-inner-block'>
                        <h5>Information</h5>
                        <div className='footer-inner-block-wrapper'>
                            <a href = "mailto: info@meal-app.com">info@meal-app.com</a>
                            <a href="tel:123-456-7890">123-456-7890</a>
                        </div>
                    </div>

                    <div className='footer-inner-block'>
                        <h5>Social</h5>
                        <div className='footer-inner-block-wrapper social'>
                            <a href='#instagram'>
                                <Image
                                    src = {Instagram}
                                    alt = "Instagram logo"
                                />
                            </a>
                            <a href='#facebook'>
                                <Image
                                    src = {Facebook}
                                    alt = "Facebook logo"
                                />
                            </a>
                            <a href='#instagram'>
                                <Image
                                    src = {Linkedin}
                                    alt = "Linkedin logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    );
};
export default Footer;