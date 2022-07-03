import React, { useState }from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    const [overlay, setOverlay] = useState(null);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className='base-layout-header'>
                <Header overlay={overlay} setOverlay={setOverlay}/>
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