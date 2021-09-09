import React, { useState, useEffect } from 'react';

import { Box, Button, Card, CardHeader, CardBody, CardFooter, Heading } from 'grommet';
import { Link, LinkNext } from 'grommet-icons';

function ProjectCard(props) {
    const [bc, setbc] = useState([]);
    const [el, setel] = useState([]);

    useEffect(() => {
        setbc({border: "0px solid red"});
        setel(["none"]);
    }, []);

    let desc = props.description;

    if(desc === null) {
        desc = "No description available";
    }

    function colorBorder() {
        setbc({border: "3px solid red"});
        setel("medium");
    }

    function decolorBorder() {
        setbc({border: "0px solid red"});
        setel("none");
    }

    return(
        <Card 
            align="center"
            elevation={el}
            // style={bc}
            pad="medium" 
            background="secondary"
            onMouseEnter={() => colorBorder()}
            onMouseLeave={() => decolorBorder()}
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