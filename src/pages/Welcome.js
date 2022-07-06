import React, { useContext } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from '../context/ThemeContextProvider';
import { AuthContext } from "../context/AuthContextProvider";

const Login = () => {
    const { overlay } = useContext(ThemeContext);
    const { logout } = useContext(AuthContext)

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className="base-layout-main">
                <main className='main'>

                    <button
                        onClick={logout}
                    >Logout</button>
                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Login;