import React from 'react';

import { Grid } from 'grommet';

import RecipeCard from './RecipeCard';

function RecipeList(props) {
    let searchValue = props.search;
    let fullList = [];

    if(searchValue === null) {
        searchValue = "";
    }

    return(
        <Grid width="full" gap="medium" pad="medium" columns={{ count: 'fit', size: "medium"}}>
            {props.recipes.filter(function(val,key) {
                // Clause checks if no filter is applied
                if(props.categories.length === 0) {
                    return true;
                } else {
                    return (props.categories.includes(val.category) ? true: false);
                }
            }).filter(function(val,key) {
                return(val.name.toLowerCase().indexOf(searchValue) > -1 ? true : false);
            }).map((val,key) => {
                return(<RecipeCard key={val.id} name={val.name} details={val.details} id={val.id} />);
            })}
        </Grid>
    )
}

export default RecipeList;