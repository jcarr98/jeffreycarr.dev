import React, { useRef, useState } from 'react';

import { Box, Button, Drop, Text } from 'grommet';
import { BsHeart } from 'react-icons/bs';

function FavoriteButton(props) {
    const buttonRef = useRef(null);
    const [succ, setSucc] = useState(false);
    const [err, setErr] = useState(false);

    function favorite()  {
        // Get current favorites
        let favs = localStorage.getItem('favorites');
        
        // Check there are existing favorites
        if(favs === null) {
            favs = [];
        } else {
            // Conver to array
            favs = JSON.parse(favs);
        }

        // Create new object
        let link = "http://recipe.localhost:3000" + window.location.pathname;
        let newItem = {name: props.info.name, id: props.info.id, link};

        // Check if item already exists
        for(let i = 0; i < favs.length; i++) {
            if(favs[i].id === props.info.id) {
                setErr(true);
                return;
            }
        }

        // Add new object to list
        let newFavorites = [...favs];
        newFavorites.push(newItem);

        // Update cookie
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setSucc(true);
    }

    return(
        <Box>
            <Button 
                secondary 
                plain
                ref={buttonRef}
                color="main"
                label="Add to favorites" 
                icon={<BsHeart color="main" />}
                reverse
                onClick={() => favorite()} 
            />
            {succ && (
                <Drop
                    target={buttonRef.current}
                    align={{left: "right"}}
                    margin={{left: "medium"}}
                    background="#5dda55"
                    round={true}
                    onClickOutside={() => {setSucc(false)}}
                >
                    <Box align="center" pad="small">
                        <Text color="white">Item successfully add to favorites!</Text>
                    </Box>
                </Drop>
            )}
            {err && (
                <Drop
                    target={buttonRef.current}
                    align={{left: "right"}}
                    margin={{left: "medium"}}
                    background="main"
                    round={true}
                    onClickOutside={() => {setErr(false)}}
                >
                    <Box align="center" pad="small">
                        <Text>Item already favorited</Text>
                    </Box>
                </Drop>
            )}
        </Box>
    );
}

export default FavoriteButton;