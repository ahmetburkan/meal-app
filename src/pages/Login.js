import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from "../components/LoginForm";
import { ThemeContext } from "../context/ThemeContextProvider";

const Login = () => {
    const { overlay } = useContext(ThemeContext);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className='base-layout-main'>
                <main className='main'>
                    <div className="main-inner">
                        <section className='main-inner-left'>
                            <div className="main-inner-left-inner">
                                <h1>Login</h1>
                                <LoginForm/>
                                <Link className='link' to='/register'>Don't have an account? Create one now!</Link>
                            </div>
                        </section>
                        <section className='main-inner-right'></section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Login;