import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from "../components/RegisterForm";

const Register = () => {

    return (
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
    );
};

export default Register;