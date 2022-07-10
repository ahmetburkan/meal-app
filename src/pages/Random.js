import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealDetails from "../components/MealDetails";

const Random = () => {

    return (
        <>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className='base-layout-main random'>
                <main className='main'>
                    <div className="main-inner">
                        <MealDetails/>
                    </div>
                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </>
    );
};

export default Random;