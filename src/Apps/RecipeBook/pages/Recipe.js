import React, { useEffect, useState } from 'react';

import { Button, Box, Table, TableHeader, TableRow, TableCell, TableBody, Text, Accordion, AccordionPanel, CheckBox } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import Axios from 'axios';

import AppBar from '../../../globals/components/AppBar';
import Loading from '../components/Loading';

function Recipe(props) {
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [directionsList, setDirectionsList] = useState([]);
    const [loading, setLoading] = useState([]);
    const [activeIndex, setActiveIndex] = useState([0,1]);
    const [completedSteps, setCompletedSteps] = useState([]);

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

    function completeStep(i) {
        /* Check if the step is completed already
         * If it is, then remove it from completed steps and update the list
         * If it isn't, the add it to the completed steps and update the list
        */
       let newCompletedSteps = completedSteps;
       if(completedSteps.includes(i)) {
           // Find index of item
           let index = newCompletedSteps.indexOf(i);
           // Remove item
           newCompletedSteps.splice(index, 1);
       } else {
           newCompletedSteps.push(i);
       }

       setCompletedSteps(newCompletedSteps);
       console.log("Updated completed steps: " + completedSteps);
    }

    return(
        <Box align="center" full responsive>
            <AppBar />

            {/* Back to recipe list */}
            <Box alignSelf="start" pad="medium">
                <Button 
                    href="http://recipe.localhost:3000/" 
                    color="main" 
                    icon={ <LinkPrevious color="main" size="medium" /> } 
                    label="Back to Recipe List"
                    plain
                />
            </Box>

            {loading ? <Loading text="Loading Recipe..." /> : null}
            <Box align="center" style={{visibility: loading ? "hidden" : "visible"}}>
                <h1>{recipeInfo.name}</h1>

                <Accordion 
                    multiple={true} 
                    activeIndex={activeIndex}
                    onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
                    animate={true}
                >
                    <AccordionPanel label="Ingredients" >
                        <Box align="center" pad="medium">
                            <Table>
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
                    <AccordionPanel label="Directions">
                        <Box>
                            {directionsList.map((val,key) => {
                                return(
                                    <CheckBox 
                                        label={
                                            <Text style={{
                                                textDecoration: completedSteps.includes(val.step_num) ? "line-through" : "none",
                                                color: completedSteps.includes(val.step_num) ? "gray" : "white"
                                            }}>
                                                {val.step}
                                            </Text>
                                        }
                                        key={val.step_num}
                                        onChange={() => completeStep(val.step_num)}
                                        pad="xsmall" 
                                    />
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