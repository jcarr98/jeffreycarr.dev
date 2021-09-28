import React from 'react';

import { Box, Spinner, Text } from 'grommet';

function Loading() {
    return(
        <Box align="center" pad="xlarge">
            <Spinner color="main" />
            <Text>Loading Recipes...</Text>
        </Box>
    );
}

export default Loading;