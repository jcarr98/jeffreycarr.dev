import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Box, Button, Grid, Heading } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import AppBar from '../../../globals/components/AppBar';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const [repoList, setRepoList] = useState([]);

    // Get projects list
    useEffect(() => {
        Axios.get('https://api.github.com/users/jcarr98/repos').then((data) => {
            setRepoList(data.data);
        });
    }, []);

    return (
        <Box>
            <AppBar />

            {/* Home link */}
            <Box alignSelf="start" pad="medium">
                <Button 
                    href="http://localhost:3000/" 
                    color="main" 
                    icon={ <LinkPrevious color="main" size="medium" /> } 
                    label="Back to Home"
                    plain
                />
            </Box>

            <Box width="full" align="center">
                <Heading>My Projects</Heading>
            </Box>
            
            <Grid gap="large" pad="medium" columns={{ count: 'fit', size: "medium"}}>
                {repoList.map((val,key) => {
                    return(
                        <ProjectCard key={val.id} name={val.name} description={val.description} url={val.html_url} />
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Projects;