import React from 'react';

import { Box, defaultProps, Spinner, Text } from 'grommet';

function Loading(props) {
    return(
        <Box align="center" pad="xlarge">
            <Spinner color="main" />
            <Text>{props.text}</Text>
        </Box>
    );
}

export default Loading;