import React, { useContext } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from '../context/ThemeContextProvider';

const Login = () => {
    const { overlay } = useContext(ThemeContext);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className="base-layout-main">
                <main className='main'>

                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Login;