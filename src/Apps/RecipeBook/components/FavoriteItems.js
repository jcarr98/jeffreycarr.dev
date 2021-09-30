import React from 'react';

import { Box, Button } from 'grommet';
import { Trash } from 'grommet-icons';

function FavoriteItem(props) {
    function remove() {
        props.removeFromFavorites(props.fav.id);
    }

    return(
        <Box direction="row" align="center">
            <Box>
                <Button
                    secondary
                    plain
                    color="main"
                    href={props.fav.link}
                    label={props.fav.name}
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