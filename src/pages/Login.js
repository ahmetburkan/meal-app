import React, { useState } from 'react';

const Login = () => {
    const [overlay, setOverlay] = useState(null);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className="base-layout-main">
                <main className='main'>
                    <div className="main-inner">
                        <section className='main-inner-left'>
                            <p>login</p>
                        </section>
                        <section className='main-inner-right'></section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Login;