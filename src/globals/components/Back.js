import React from 'react';

import { Box, Button } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

function Back(props) {
    return(
        <Box alignSelf="start" pad="medium">
            <Button 
                href={props.link}
                color="main" 
                icon={ <LinkPrevious color="main" size="medium" /> } 
                label={props.label}
                plain
            />
        </Box>
    );
}

export default Back;