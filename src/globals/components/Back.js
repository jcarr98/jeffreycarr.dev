import React from 'react';

import { Box, Button } from 'grommet';
import { GrLinkPrevious } from 'react-icons/gr';

function Back(props) {
    return(
        <Box alignSelf="start" pad="medium">
            <Button 
                href={props.link}
                color="main" 
                icon={ <GrLinkPrevious color="main" size="medium" /> } 
                label={props.label}
                plain
            />
        </Box>
    );
}

export default Back;