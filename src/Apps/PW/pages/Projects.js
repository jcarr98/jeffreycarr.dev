import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Box, Button, Grid, Heading } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import AppBar from '../../../globals/components/AppBar';
import ProjectCard from '../components/ProjectCard';
import Loading from '../../RecipeBook/components/Loading';

function Projects() {
    const [repoList, setRepoList] = useState([]);
    const [loading, setLoading] = useState([]);

    // Get projects list
    useEffect(() => {
        setLoading(true);
        Axios.get('https://api.github.com/users/jcarr98/repos').then((data) => {
            setRepoList(data.data);
            setLoading(false);
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
            
            {loading ? <Loading text="Loading Projects..." /> : null}
            <Grid 
                gap="large" 
                pad="medium" 
                columns={{ count: 'fit', size: "medium"}} 
                style={{visibility: loading ? "hidden" : "visible"}}
            >
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