import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Image from './Image';

const MealDetails = () => {
    let { id } = useParams();
    let [ data, setData ] = useState([]);

    function print() {
        window.print();
    }

    useEffect(() => {
        async function getResults() {
            let path = window.location.pathname;

            if (path === "/random") {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                setData(results.data.meals);
            }

            if (path.includes("/area/")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {a: id}});
                let array = results.data.meals;
                const mealId = array[Math.floor(Math.random() * array.length)].idMeal;
                const resultsAfter = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {params: {i: mealId}});
                setData(resultsAfter.data.meals);
            }

            if (path.includes("/category/")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {c: id}});
                let array = results.data.meals;
                const mealId = array[Math.floor(Math.random() * array.length)].idMeal;
                const resultsAfter = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {params: {i: mealId}});
                setData(resultsAfter.data.meals);
            }

            if (path.includes("/ingredient/")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {params: {i: id}});
                let array = results.data.meals;
                const mealId = array[Math.floor(Math.random() * array.length)].idMeal;
                const resultsAfter = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {params: {i: mealId}});
                setData(resultsAfter.data.meals);
            }

            if (path.includes("meal")) {
                const results = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {params: {i: id}});
                setData(results.data.meals);
            }
        }
        getResults()
    },[id])

    return (
        <>
            {data.map((row, index) => {
                return (
                    <div  className={"wrapper"} key={index}>
                        <div className={'left'}>
                            <h1>{ row.strMeal }</h1>
                            <p>{ row.strInstructions }</p>

                            <div className='table'>
                                <div className='row head'>
                                    <div className='item'>Ingredient</div>
                                    <div className='item options'>Measurement</div>
                                </div>
                                { (row.strMeasure1 ? <div className='row'><div className='item'>{row.strIngredient1}</div><div className='item'>{row.strMeasure1}</div></div> : '') }
                                { (row.strMeasure2 ? <div className='row'><div className='item'>{row.strIngredient2}</div><div className='item'>{row.strMeasure2}</div></div> : '') }
                                { (row.strMeasure3 ? <div className='row'><div className='item'>{row.strIngredient3}</div><div className='item'>{row.strMeasure3}</div></div> : '') }
                                { (row.strMeasure4 ? <div className='row'><div className='item'>{row.strIngredient4}</div><div className='item'>{row.strMeasure4}</div></div> : '') }
                                { (row.strMeasure5 ? <div className='row'><div className='item'>{row.strIngredient5}</div><div className='item'>{row.strMeasure5}</div></div> : '') }
                                { (row.strMeasure6 ? <div className='row'><div className='item'>{row.strIngredient6}</div><div className='item'>{row.strMeasure6}</div></div> : '') }
                                { (row.strMeasure7 ? <div className='row'><div className='item'>{row.strIngredient7}</div><div className='item'>{row.strMeasure7}</div></div> : '') }
                                { (row.strMeasure8 ? <div className='row'><div className='item'>{row.strIngredient8}</div><div className='item'>{row.strMeasure8}</div></div> : '') }
                                { (row.strMeasure9 ? <div className='row'><div className='item'>{row.strIngredient9}</div><div className='item'>{row.strMeasure9}</div></div> : '') }
                                { (row.strMeasure10 ? <div className='row'><div className='item'>{row.strIngredient10}</div><div className='item'>{row.strMeasure10}</div></div> : '') }
                                { (row.strMeasure11 ? <div className='row'><div className='item'>{row.strIngredient11}</div><div className='item'>{row.strMeasure11}</div></div> : '') }
                                { (row.strMeasure12 ? <div className='row'><div className='item'>{row.strIngredient12}</div><div className='item'>{row.strMeasure12}</div></div> : '') }
                                { (row.strMeasure13 ? <div className='row'><div className='item'>{row.strIngredient13}</div><div className='item'>{row.strMeasure13}</div></div> : '') }
                                { (row.strMeasure14 ? <div className='row'><div className='item'>{row.strIngredient14}</div><div className='item'>{row.strMeasure14}</div></div> : '') }
                                { (row.strMeasure15 ? <div className='row'><div className='item'>{row.strIngredient15}</div><div className='item'>{row.strMeasure15}</div></div> : '') }
                                { (row.strMeasure16 ? <div className='row'><div className='item'>{row.strIngredient16}</div><div className='item'>{row.strMeasure16}</div></div> : '') }
                                { (row.strMeasure17 ? <div className='row'><div className='item'>{row.strIngredient17}</div><div className='item'>{row.strMeasure17}</div></div> : '') }
                                { (row.strMeasure18 ? <div className='row'><div className='item'>{row.strIngredient18}</div><div className='item'>{row.strMeasure18}</div></div> : '') }
                                { (row.strMeasure19 ? <div className='row'><div className='item'>{row.strIngredient19}</div><div className='item'>{row.strMeasure19}</div></div> : '') }
                                { (row.strMeasure20 ? <div className='row'><div className='item'>{row.strIngredient20}</div><div className='item'>{row.strMeasure20}</div></div> : '') }
                            </div>
                        </div>
                        <div className={"right"}>
                            <button onClick={print}>Print</button>
                            <Image src={data.strMealThumb} alt={data.strMeal}/>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MealDetails;