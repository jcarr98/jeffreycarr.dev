import React, { useCallback, useEffect, useState } from 'react';

import Axios from 'axios';
import { Accordion, AccordionPanel, Box, Button, CheckBoxGroup, DropButton, Grid, Heading, Nav, Text, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

import { useCookies } from 'react-cookie';

import AppBar from '../../../globals/components/AppBar';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import FavoriteItem from '../components/FavoriteItems';

function RecipeMenu() {
    /* States */
    // Constant states
    const [recipeList, setRecipeList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    // Changing states
    const [loading, setLoading] = useState([true]);
    const [searchValue, setSearchValue] = useState([]);
    const [categoriesValue, setCategoriesValue] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // Load recipes
    useEffect(() => {
        document.title = "Jean's Recipe Book"
        // Get favorite items
        setFavorites(loadCookies());

        // Get all categories
        Axios.get("http://localhost:3002/api/getCategories").then((data) => {
            // Convert list of json objects to list of checkbox objects
            let items = [];

            for(let i = 0; i < data.data.length; i++) {
                let item = {
                    label: data.data[i].name,
                    checked: false,
                    value: data.data[i].id
                }

                items.push(item);
            }

            setCategoryList(items);
        });


        // Get all recipes
        Axios.get("http://localhost:3002/api/get").then((data) => {
            setRecipeList(data.data);

            setLoading(false);
        });
    }, []);

    function loadCookies() {
        let favs = localStorage.getItem('favorites');

        return favs === null ? [] : JSON.parse(favs);
    }

    const removeFromFavorites = useCallback((id) => {
        let newFavorites = [...favorites];
        let index = -1;

        // Search for item
        for(let i = 0; i < favorites.length; i++) {
            if(favorites[i].id === id) {
                index = i;
                break;
            }
        }

        // Check if item exists
        if(index < 0) {
            return;
        }

        // Remove item
        console.log("Removing " + newFavorites[index].name);
        newFavorites.splice(index, 1);

        // Update list
        setFavorites(newFavorites);
    });

    // Callback allows for child elements to use this method
    const addToFavorites = useCallback((name, id) => {
        // Create new object
        let link = "http://recipe.localhost:3000/recipe/" + id;
        let newItem = {name: name, id: id, link: link};
        
        // Check if item already exists
        for(let i = 0; i < favorites.length; i++) {
            if(favorites[i].id === id) {
                return;
            }
        }

        // Add new object to list
        let newFavorites = [...favorites];
        newFavorites.push(newItem);

        console.log("Adding " + name + " to favorites");

        // Update list and cookie
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        console.log("Cookie saved");
    });

    return (
        <Box align="center" full responsive>
            <AppBar />
            <Heading pad="medium" alignSelf="center">Jean's Recipe Book</Heading>
            <Nav direction="row" align="center" background="main" width="75%" pad="medium" responsive>
                <DropButton 
                    color="secondary"
                    label="Filters"
                    dropAlign={{top: 'bottom', right: 'right'}}
                    dropContent={
                        <Box pad="medium">
                            {loading ? <Loading text="Loading Categories..." /> : null}
                            <CheckBoxGroup 
                                color="main" 
                                options={categoryList} 
                                onChange={(event) => {setCategoriesValue(event.value)}}
                                style={{visibility: loading ? "hidden" : "visible"}}
                            />
                        </Box>
                    }
                />
                <TextInput
                    placeholder="Search"
                    icon={<Search />}
                    reverse
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                    a11yTitle="A search box to filter shown recipes"
                />
            </Nav>
            <Accordion width="70%">
                <AccordionPanel label="Favorites">
                    {loading ? <Loading text="Loading favorites..." /> : null}
                    <ul style={{visibility: loading ? "hidden" : "visible"}}>
                        {favorites.map((val) => {
                            return(
                                <li key={val.id}>
                                    <FavoriteItem fav={val} removeFromFavorites={removeFromFavorites} />
                                </li>
                            );
                        })}
                    </ul>
                </AccordionPanel>
            </Accordion>

            {loading ? <Loading text="Loading Recipes..." /> : null}
            <Grid width="full" gap="medium" pad="medium" columns={{ count: 'fit', size: "medium"}} style={{visibility: loading ? "hidden" : "visible"}}>
                {recipeList.filter(function(val,key) {
                    // Clause checks if no filter is applied
                    if(categoriesValue.length === 0) {
                        return true;
                    } else {
                        return categoriesValue.includes(val.category);
                    }
                }).filter(function(val,key) {
                    return(val.name.toLowerCase().indexOf(searchValue) > -1 ? true : false);
                }).map((val,key) => {
                    return(<RecipeCard key={val.id} name={val.name} details={val.details} id={val.id} addToFavorites={addToFavorites} />);
                })}
            </Grid>
        </Box>
    );
}

export default RecipeMenu;