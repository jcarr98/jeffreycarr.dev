import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import Axios from 'axios';
import { Grommet } from 'grommet';

import RecipeCard from '../components/RecipeCard';
import AppBar from '../../../globals/components/AppBar';

function Menu() {
    // Create recipe states
    const [recipeList, setRecipeList] = useState([]);

    let history = useHistory();

    // Load recipes
    useEffect(() => {
        Axios.get("http://localhost:3002/api/get").then((data) => {
            setRecipeList(data.data);
        });
    }, []);

    return (
        <Grommet>
            <AppBar />
            <h1>Full Recipe List</h1>
            <div>
                {recipeList.map((val,key) => {
                    return (
                        <RecipeCard name={val.name} details={val.details} id={val.id} />
                    )
                })}
            </div>

            <a href="http://recipe.localhost:3000/test">To test page</a>
            
        </Grommet>
    );
}

export default Menu;