import React, { useEffect } from 'react';

import { Box, Button } from 'grommet';
import { Trash } from 'grommet-icons';

function FavoriteItem(props) {
    const link = "http://recipe.localhost:3000/recipe/" + props.id;

    function remove() {
        props.remove(props.id);
    }

    return(
        <Box direction="row" align="center">
            <Box>
                <Button
                    secondary
                    plain
                    color="main"
                    href={link}
                    label={props.name}
                />
            </Box>
            <Box>
                <Button 
                    icon={<Trash />}
                    onClick={() => remove()}
                />
            </Box>
        </Box>
    )
}

export default FavoriteItem;