import React, { useEffect, useState } from 'react';

import { Accordion, AccordionPanel, Box, CheckBox, Text } from 'grommet';
import Axios from 'axios';

import AppBar from '../../../../globals/components/AppBar';
import FavoriteButton from './FavoriteButton';
import WakeLock from './WakeLock';
import Loading from '../../../../globals/components/Loading';
import DirectionsList from './DirectionsList';
import IngredientsList from './IngredientsList';
import Back from '../../../../globals/components/Back';

function Recipe() {
    const [recipeInfo, setRecipeInfo] = useState([]);
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
            setLoading(false);
        });
    }, []);

    return(
        <Box align="center" full responsive>
            <AppBar />

            <Box direction="row" fill>
                {/* Back to recipe list */}
                <Back link="http://recipe.localhost:3000/" label="Back to Recipe List" />

                {/* WakeLock toggle */}
                <WakeLock />
            </Box>
            
            {loading ? <Loading text="Loading Recipe..." /> : null}
            <Box align="center" style={{visibility: loading ? "hidden" : "visible"}}>
                <h1>{recipeInfo.name}</h1>

                {/* Favorite Item */}
                <FavoriteButton info={recipeInfo} />

                {/* Accordion holding both ingredients list and steps */}
                <Accordion 
                    multiple={true} 
                    activeIndex={activeIndex}
                    onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
                    animate={true}
                >
                    {/* Ingredients list */}
                    <AccordionPanel label="Ingredients" >
                        <IngredientsList id={id} />
                    </AccordionPanel>
                    {/* Directions list */}
                    <AccordionPanel label="Directions">
                        <DirectionsList id={id} />
                    </AccordionPanel>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Recipe;