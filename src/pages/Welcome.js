import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {

    return (
        <>
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
        </>
    );
};

export default Login;