import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const AreaOverview = () => {
    let { id } = useParams();

    let [ data, setData ] = useState([])
    useEffect(() => {
        async function getResults() {
            const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {a: id}});
            setData(results.data.meals)

            console.log(results.data.meals)
        }
        getResults()
    },[])
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

export default AreaOverview;