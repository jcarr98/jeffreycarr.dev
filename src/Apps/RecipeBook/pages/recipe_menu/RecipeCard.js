import React, { useEffect, useState } from 'react';

import { Box, Button, Card, CardHeader, CardBody, CardFooter, Heading } from 'grommet';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

function RecipeCard(props) {
    const [el, setel] = useState([]);
    const [favorited, setFavorited] = useState(false);
    const link = "http://recipe.localhost:3000/recipe/" + props.id;

    useEffect(() => {
        // Default to no elevation
        setel("none");

        /* Check if favorited item */
        // Grab favorited items
        let favs = localStorage.getItem('favorites') === null ? [] : JSON.parse(localStorage.getItem('favorites'));
        // Check if this id is already favorited
        for(let i = 0; i < favs.length; i++) {
            if(favs[i].id === props.id) {
                setFavorited(true);
                break;
            }
        }
    }, []);

    /** Apply elevation to card on mouse enter */
    function elevate() {
        setel("xlarge");
    }

    /** Remove elevation to card on mouse leave */
    function unelevate() {
        setel("none")
    }

    /** Update the status of whether this item is favorited or not */
    function updateFavorite() {
        // Use callbacks to update cookie
        favorited ? props.remove(props.id) : props.add(props.name, props.id);

        // Update state
        setFavorited(!favorited);
    }

    return (
        <Card 
            align='center'
            elevation={el}
            pad="medium"
            background="secondary"
            onMouseEnter={() => elevate()}
            onMouseLeave={() => unelevate()}
        >
            <CardHeader size="small" width="full" round>
                <Box width="full" align="center">
                    <Heading level="3" weight="bold">{props.name}</Heading>
                </Box>
            </CardHeader>
            <CardBody pad="small">{props.details}</CardBody>
            <CardFooter pad="small">
                {/* Link to recipe */}
                <Button 
                    primary 
                    color="main" 
                    href={link} 
                    label="Check Out" 
                />
                {/* Add to favorites */}
                <Button 
                    secondary 
                    plain
                    color="main"
                    onClick={() => updateFavorite()} 
                    label={props.ids.includes(props.id) ? <BsHeartFill size="1.25em" color="main" /> : <BsHeart size="1.25em" color="main" />}
                />
            </CardFooter>
        </Card>
    )
}

export default RecipeCard;