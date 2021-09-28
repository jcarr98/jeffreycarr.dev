import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import Axios from 'axios';
import { Box, CheckBoxGroup, DropButton, Heading, Nav, Text, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

import AppBar from '../../../globals/components/AppBar';
import RecipeList from '../components/RecipeList';
import Loading from '../components/Loading';

function Menu() {
    /* States */
    // Constant states
    const [recipeList, setRecipeList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    // Changing states
    const [loading, setLoading] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [categoriesValue, setCategoriesValue] = useState([]);

    // Load recipes
    useEffect(() => {
        // Set loading status, resolves in recipe get
        setLoading(true);

        // Get all recipes
        Axios.get("http://localhost:3002/api/get").then((data) => {
            setLoading(false);
            setRecipeList(data.data);
        });

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

    }, []);

    return (
        <Box align="center" full responsive>
            <AppBar />
            <Heading pad="medium" alignSelf="center">Jean's Recipe Book</Heading>
            <Nav direction="row" align="center" background="main" width="75%" pad="medium">
                <DropButton 
                    color="secondary"
                    label="Filters"
                    dropAlign={{top: 'bottom', right: 'right'}}
                    dropContent={
                        <Box pad="medium">
                            <CheckBoxGroup 
                                color="main" 
                                options={categoryList} 
                                onChange={(event) => {setCategoriesValue(event.value)}}
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

            {/* Displays spinner if data is still loading, displays recipe list otherwise */}
            {loading ? <Loading /> : <RecipeList recipes={recipeList} search={searchValue} categories={categoriesValue} /> }
        </Box>
    );
}

export default Menu;