import React, { useState, useEffect } from 'react';

import { Box, Button, Card, CardHeader, CardBody, CardFooter, Heading } from 'grommet';
import { Link, LinkNext } from 'grommet-icons';

function ProjectCard(props) {
    const [el, setel] = useState([]);

    useEffect(() => {
        setel("none");
    }, []);

    let desc = props.description;

    if(desc === null) {
        desc = "No description available";
    }

    function elevate() {
        setel("medium");
    }

    function unelevate() {
        setel("none");
    }

    return(
        <Card 
            align="center"
            elevation={el}
            pad="medium" 
            background="secondary"
            onMouseEnter={() => elevate()}
            onMouseLeave={() => unelevate()}
        >
            <CardHeader background="main" width="full" round>
                <Box width="full" align="center">
                    <Heading level="4" weight="bold">{props.name}</Heading>
                </Box>
            </CardHeader>
            <CardBody pad="small">
                {desc}
            </CardBody>
            <CardFooter>
                <Button
                    href={props.url} 
                    target="_blank" 
                    icon={ <LinkNext color="main" /> } 
                    label="Check out on Github"
                    color="main"

                    plain 
                    reverse
                    a11yTitle="Link to the Github page for this project"
                />
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;