import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
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
    );
};

export default Login;