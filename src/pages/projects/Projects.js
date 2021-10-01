import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { Box, Grid, Heading } from 'grommet';

import ProjectCard from './components/ProjectCard';
// Global components
import AppBar from '../../components/AppBar';
import Loading from '../../components/Loading';
import Back from '../../components/Back';

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
            <Back route="/" label="Back to Home" />

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