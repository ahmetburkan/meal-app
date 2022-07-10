import React, { createContext, useState, useEffect } from 'react';

export const MealContext = createContext(null);

function MealContextProvider({ children }) {

    const [mealId, setMealId] = useState(null);
    const [mealCategory, setMealCategory] = useState(null);
    const [mealArea, setMealArea] = useState(null);
    function setMealData(category, area, id) {
        setMealCategory(category);
        setMealArea(area);
        setMealId(id);
    }

    return (
        <MealContext.Provider value={{
            setMealData: setMealData,
        }}>
            { children }
        </MealContext.Provider>
    )
}

export default MealContextProvider;