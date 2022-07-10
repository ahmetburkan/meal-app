import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const Overview = () => {
    let { name } = useParams();
    let [ data, setData ] = useState([])

    useEffect(() => {
        let path = window.location.pathname;

        async function getResults() {

            if (path.includes("area")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {a: name}});
                setData(results.data.meals)
            }

            if (path.includes("category")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {c: name}});
                setData(results.data.meals)
            }

            if (path.includes("ingredient")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {i: name}});
                setData(results.data.meals)
            }
        }
        getResults();
    },[name])
    return (
        <>
            <div className='base-layout-header'>
                <Header/>
            </div>

            <div className='base-layout-main overview'>
                <main className='main'>
                    <div className="main-inner">
                        {data.map((row, index) => {
                            return (
                                <Link className='meal-wrapper' key={index} to={'/meal/' + row.idMeal}>
                                    <img src={row.strMealThumb} alt='Meal'/>
                                    <div className="wrapper">
                                        <h3>{row.strMeal}</h3>
                                        <button>Try it!</button>
                                    </div>

                                </Link>
                            );
                        })}
                    </div>
                </main>
            </div>

            <div className="base-layout-footer">
                <Footer/>
            </div>
        </>
    );
};

export default Overview;