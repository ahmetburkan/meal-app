import React from "react";
import SurpriseBox from "../assets/images/surprise-box.png";
import Eye from "../assets/images/eye.png";
import { Link } from "react-router-dom";

const ListItem = (data) => {
    return (
        <div className='row'>
            <div className='item'>
                {data.data.strArea ? data.data.strArea : ""}
                {data.data.strCategory ? data.data.strCategory : ""}
                {data.data.strIngredient ? data.data.strIngredient : ""}
            </div>

            <div className='item icons'>
                {data.data.strArea ? <Link to={'/area/' + data.data.strArea}><img src={Eye} alt='Eye icon'/></Link> : ''}
                {data.data.strCategory ? <Link to={'/category/' + data.data.strCategory}><img src={Eye} alt='Eye icon'/></Link> : ''}
                {data.data.strIngredient ? <Link to={'/ingredient/' + data.data.strIngredient}><img src={Eye} alt='Eye icon'/></Link> : ''}

                {data.data.strArea ? <Link to={'/random/area/' + data.data.strArea}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
                {data.data.strCategory ? <Link to={'/random/category/' + data.data.strCategory}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
                {data.data.strIngredient ? <Link to={'/random/ingredient/' + data.data.strIngredient}><img src={SurpriseBox} alt='Suprise Box'/></Link> : ''}
            </div>
        </div>
    );
};
export default ListItem;