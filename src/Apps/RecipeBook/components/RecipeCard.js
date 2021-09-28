import React, { useState } from 'react';
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Heading } from 'grommet';
import { useEffect } from 'react';

function RecipeCard(props) {
    const [el, setel] = useState([]);

    useEffect(() => {
        setel("none");
    }, []);

    const link = "http://recipe.localhost:3000/recipe/" + props.id;


    function elevate() {
        setel("xlarge");
    }

    function unelevate() {
        setel("none")
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
                <Button primary color="main" href={link} label="Check Out" />
            </CardFooter>
        </Card>
    )
}

export default RecipeCard;