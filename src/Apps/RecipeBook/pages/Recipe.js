import React, { useEffect, useState } from 'react';

import { Accordion, AccordionPanel, Box, Table, TableCell, TableHeader, TableRow, TableBody, Text } from 'grommet';
import Axios from 'axios';

import AppBar from '../../../globals/components/AppBar';
import Loading from '../components/Loading';
import Direction from '../components/Direction';
import Back from '../../../globals/components/Back';

function Recipe(props) {
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [directionsList, setDirectionsList] = useState([]);
    const [loading, setLoading] = useState([]);
    const [activeIndex, setActiveIndex] = useState([0,1]);

    const pathname = window.location.pathname.split('/');
    const id = pathname[pathname.length-1];

    // Load stuff
    useEffect(() => {
        // Set loading
        setLoading(true);

        // Load recipe info
        let api = "http://localhost:3002/api/get/" + id;
        Axios.get(api).then((data) => {
            setRecipeInfo(data.data[0]);
            
            // Set title here since setting states is async and we want title immediately
            document.title = "Jean's Recipe Book - " + data.data[0].name;
        });

        // Load ingredients
        api = "http://localhost:3002/api/getIngredients/" + id;
        Axios.get(api).then((data) => {
            let items = [];

            for(let i = 0; i < data.data.length; i++) {
                let item = {
                    uid: data.data[i].uid,
                    name: data.data[i].name,
                    amount: data.data[i].amount,
                    style: data.data[i].style
                };

                items.push(item);
            }

            setIngredientList(items);
        });

        // Load directions
        api = "http://localhost:3002/api/getDirections/" + id;
        Axios.get(api).then((data) => {
            setDirectionsList(data.data);

            // Done loading
            setLoading(false);
        });
    }, []);

    return(
        <Box align="center" full responsive>
            <AppBar />

            {/* Back to recipe list */}
            <Back link="http://recipe.localhost:3000/" label="Back to Recipe List" />

            {loading ? <Loading text="Loading Recipe..." /> : null}
            <Box align="center" style={{visibility: loading ? "hidden" : "visible"}}>
                <h1>{recipeInfo.name}</h1>

                {/* Accordion holding both ingredients list and steps */}
                <Accordion 
                    multiple={true} 
                    activeIndex={activeIndex}
                    onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
                    animate={true}
                >
                    {/* Ingredients list */}
                    <AccordionPanel label="Ingredients" >
                        <Box align="center" pad="medium">
                            <Table>
                                {/* Headers for table */}
                                <TableHeader>
                                    <TableRow>
                                        <TableCell scope="col" border="bottom" key="Ingredient">
                                            <Text color="main" weight="bold">Ingredient</Text>
                                        </TableCell>
                                        <TableCell scope="col" border="bottom" key="Amount">
                                            <Text color="main" weight="bold">Amount</Text>
                                        </TableCell>
                                        <TableCell scope="col" border="bottom" key="Preparation">
                                            <Text color="main" weight="bold">Preparation</Text>
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* Maps ingredients to table */}
                                    {ingredientList.map((val,key) => {
                                        return(
                                            <TableRow key={val.uid}>
                                                <TableCell scope="row" border="bottom" key={`${key}:A`}>
                                                    <Text>{val.name}</Text>
                                                </TableCell>
                                                <TableCell scope="row" border="left right" key={`${key}:B`}>
                                                    <Text>{val.amount}</Text>
                                                </TableCell>
                                                <TableCell scope="row" border="bottom" key={`${key}:C`}>
                                                    <Text>{val.style}</Text>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </AccordionPanel>
                    {/* Directions list */}
                    <AccordionPanel label="Directions">
                        <Box>
                            {/* Maps directions to a list. Directions are checkboxes */}
                            {directionsList.map((val,key) => {
                                return(
                                    <ul style={{listStyleType: "none"}}>
                                        <li>
                                            <Direction stepNum={val.step_num} step={val.step} />
                                        </li>
                                    </ul>
                                );
                            })}
                        </Box>
                    </AccordionPanel>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Recipe;