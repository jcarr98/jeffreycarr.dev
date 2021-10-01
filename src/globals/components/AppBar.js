import React from 'react';
import { useHistory } from 'react-router';

import { Anchor, Box, Header, Menu, Text } from 'grommet';
import { Apps, Home } from 'grommet-icons';

function AppBar() {
    const history = useHistory();

    return(
        <Header
        background="main" 
        pad="small"
        width="full"
        style={{ position: "sticky", top: "0", zIndex: "1" }}
        responsive
        >
            <Anchor onClick={() => history.push('/')} color="mainText">
                <Home />
            </Anchor>
            <Text size="xlarge" weight="bold">Jeffrey Carr</Text>
            <Menu
                dropAlign={{
                    top: "bottom",
                    left: "left"
                }}
                items={[
                    {label: "Main Website", onClick: () => {history.push('/')}},
                    {label: "Recipe Book", onClick: () => {window.location.href = "http://recipe.localhost:3000/"}}
                ]}
            >
                <Box direction="column" align="center">
                    <Apps />
                    <Text size="small">Apps</Text>
                </Box>
            </Menu>
        </Header>
        
    );
}

export default AppBar;