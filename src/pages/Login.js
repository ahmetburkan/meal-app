import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from "../components/Form";
import { ThemeContext } from "../context/ThemeContextProvider";

const Login = () => {
    const { setFormType, formType } = useContext(ThemeContext);

    useEffect(() => {
        async function effect() {
            setFormType('login');
        }
        effect();
    },[formType])

    return (
        <div className='base-layout-main login'>
            <main className='main'>
                <div className="main-inner">

                    <div className='main-inner-left'>
                        <div className="main-inner-left-inner">
                            <h1>{ formType }</h1>
                            <Form/>
                            <Link className='link' to='/register'>Don't have an account? Create one now!</Link>
                        </div>
                    </div>
                    <div className='main-inner-right'></div>

                </div>
            </main>
        </div>
    );
};

export default Login;