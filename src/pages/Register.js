import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from "../components/RegisterForm";
import { ThemeContext } from "../context/ThemeContextProvider";

const Register = () => {
    const { overlay } = useContext(ThemeContext);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className='base-layout-main'>
                <main className='main'>
                    <div className="main-inner">
                        <section className='main-inner-left'>
                            <div className="main-inner-left-inner">
                                <h1>Register</h1>
                                <RegisterForm/>
                                <Link className='link' to='/'>Do you already have an account? Go to login!</Link>
                            </div>
                        </section>
                        <section className='main-inner-right'></section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Register;