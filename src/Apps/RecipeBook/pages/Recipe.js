import React, { useEffect, useState } from 'react';

import { Grommet } from 'grommet';
import Axios from 'axios';

import AppBar from '../../../globals/components/AppBar';

function Recipe(props) {
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [directionsList, setDirectionsList] = useState([]);
    const [test, setTest] = useState([]);

    const pathname = window.location.pathname.split('/');
    const id = pathname[pathname.length-1];

    // Load recipe info
    useEffect(() => {
        let api = "http://localhost:3002/api/get/" + id;
        Axios.get(api).then((data) => {
            setRecipeInfo(data.data[0]);
        });
    }, []);

    // Load ingredients
    useEffect(() => {
        let api = "http://localhost:3002/api/getIngredients/" + id;
        Axios.get(api).then((data) => {
            setIngredientList(data.data);

            console.log(ingredientList);
        });
    }, []);
    
    // Load recipe directions
    useEffect(() => {
        let api = "http://localhost:3002/api/getDirections/" + id;
        Axios.get(api).then((data) => {
            setDirectionsList(data.data);
        });
    }, []);

    return(
        <Grommet>
            <AppBar />
            <h1>{recipeInfo.name}</h1>
            <h2>Ingredients</h2>
            <ul>
                {ingredientList.map((val,key) => {
                    return(
                        <li>{val.name}</li>
                    );
                })}
            </ul>
            <h2>Directions</h2>
            <ol>
                {directionsList.map((val,key) => {
                    return(
                        <li key={val.step_num}>{val.step}</li>
                    )
                })}
            </ol>
        </Grommet>
    );
}

export default Recipe;