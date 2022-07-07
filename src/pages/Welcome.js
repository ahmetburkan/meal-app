import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import jwt_decode from "jwt-decode";

const Login = () => {

    return (
        <>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className='base-layout-main welcome'>
                <main className='main'>
                    <div className="main-inner">
                        <section className='main-inner-left'>
                            <div className="main-inner-left-inner">
                                <h1>Welcome { jwt_decode(localStorage.token).sub}</h1>
                                <p>What are your favorite meals?</p>
                            </div>
                        </section>
                        <section className='main-inner-right'></section>
                    </div>
                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </>
    );
};

export default Login;