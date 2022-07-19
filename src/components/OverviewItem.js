import React from "react";
import { Link } from "react-router-dom";

const OverviewItem = (data) => {
    return (
        <Link className='meal-wrapper' to={'/meal/' + data.data.idMeal}>
            <img src={data.data.strMealThumb} alt='Meal'/>
            <div className="wrapper">
                <h3>{data.data.strMeal}</h3>
                <button>Try it!</button>
            </div>
        </Link>
    );
};
export default OverviewItem;