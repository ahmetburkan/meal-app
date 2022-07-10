import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import SurpriseBox from "../assets/images/surprise-box.png";
import Eye from "../assets/images/eye.png";

const Area = () => {
    let [ data, setData ] = useState([])
    useEffect(() => {
        async function getResults() {
            const results = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            setData(results.data.meals)
        }
        getResults()
    },[])

    return (
        <>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className='base-layout-main random list'>
                <main className='main'>
                    <div className="main-inner">
                        <div className='table'>
                            <div className='row head'>
                                <div className='item'>Area</div>
                                <div className='item options'>Actions</div>
                            </div>
                            {data.map((row, index) => {
                                return (
                                    <div key={index} className='row'>
                                        <div className='item'>{row.strArea}</div>
                                        <div className='item icons'>
                                            <Link to={'/area/' + row.strArea}>
                                                <img src={Eye} alt='Eye icon'/>
                                            </Link>
                                            <Link to={'/random/' + row.strArea}>
                                                <img src={SurpriseBox} alt='Suprise Box'/>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </>
    );
};

export default Area;