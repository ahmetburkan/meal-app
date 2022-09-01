import React from "react";
import { Link } from "react-router-dom";
import Image from './Image';

const OverviewItem = (data) => {
    return (
        <Link className='meal-wrapper' to={'/meal/' + data.data.idMeal}>
            <Image src={data.data.strMealThumb} alt='Meal'/>
            <div className="wrapper">
                <h3>{data.data.strMeal}</h3>
                <button>Try it!</button>
            </div>
        </Link>
    );
};
export default OverviewItem;