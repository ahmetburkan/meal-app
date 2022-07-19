import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ListItem from "../components/ListItem";

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
                                    <ListItem
                                        key={index}
                                        data={row}
                                    />
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