import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Form from "../components/Form";
import { ThemeContext } from "../context/ThemeContextProvider";

const Register = () => {
    const { setFormType, formType } = useContext(ThemeContext);

    useEffect(() => {
        async function effect() {
            setFormType('register');
        }
        effect();
    },[formType])

    return (
        <div className='base-layout-main register'>
            <main className='main'>
                <div className="main-inner">

                    <div className='main-inner-left'>
                        <div className="main-inner-left-inner">
                            <h1>{ formType }</h1>
                            <Form/>
                            <Link className='link' to='/'>Do you already have an account? Go to login!</Link>
                        </div>
                    </div>
                    <div className='main-inner-right'></div>

                </div>
            </main>
        </div>
    );
};

export default Register;