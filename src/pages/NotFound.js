import React  from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='base-layout-error'>
            <div className="base-layout-error-main ">
                <main className='main'>
                    <h1>Not Found</h1>
                    <Link to='/'>Go to safety</Link>
                </main>
            </div>
        </div>
    );
};

export default NotFound;