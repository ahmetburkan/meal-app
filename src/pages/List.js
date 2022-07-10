import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import SurpriseBox from "../assets/images/surprise-box.png";
import Eye from "../assets/images/eye.png";

const List = () => {
    let [ data, setData ] = useState([]);
    let [ title, setTitle ] = useState('');
    let path = window.location.pathname;

    useEffect(() => {
        async function getResults() {
            if (path === "/area") {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
                setTitle("Area");
                setData(results.data.meals);
            }

            if (path === "/category") {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                setTitle("Category");
                setData(results.data.meals);
            }

            if (path === "/ingredient") {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
                setTitle("Ingredient");
                setData(results.data.meals);
            }
        }
        getResults()
    },[path])

    return (
        <>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className='base-layout-main list'>
                <main className='main'>
                    <div className="main-inner">
                        <div className='table'>
                            <div className='row head'>
                                <div className='item'>
                                    {title}
                                </div>
                                <div className='item'>Actions</div>
                            </div>
                            {data.map((row, index) => {
                                return (
                                    <div key={index} className='row'>
                                        <div className='item'>
                                            {row.strArea ? row.strArea : ""}
                                            {row.strCategory ? row.strCategory : ""}
                                            {row.strIngredient ? row.strIngredient : ""}
                                        </div>

                                        <div className='item icons'>
                                            {row.strArea ? <Link to={'/area/' + row.strArea}><img src={Eye} alt='Eye icon'/></Link> : ''}
                                            {row.strCategory ? <Link to={'/category/' + row.strCategory}><img src={Eye} alt='Eye icon'/></Link> : ''}
                                            {row.strIngredient ? <Link to={'/ingredient/' + row.strIngredient}><img src={Eye} alt='Eye icon'/></Link> : ''}

                                            {row.strArea ? <Link to={'/random/area/' + row.strArea}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
                                            {row.strCategory ? <Link to={'/random/category/' + row.strCategory}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
                                            {row.strIngredient ? <Link to={'/random/ingredient/' + row.strIngredient}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
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

export default List;