import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Box } from 'grommet';
import Direction from './Direction';
import Loading from '../../../../globals/components/Loading';

function DirectionsList(props) {
    const [loading, setLoading] = useState(true);
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        // Load directions
        let api = "http://localhost:3002/api/getDirections/" + props.id;
        Axios.get(api).then((data) => {
            setDirections(data.data);

            // Done loading
            setLoading(false);
        });
    }, []);

    return(
        <Box>
            {/* Maps directions to a list. Directions are checkboxes */}
            {loading ? <Loading text="Loading directions..." /> : (
                directions.map((val,key) => {
                    return(
                        <ul style={{listStyleType: "none"}}>
                            <li key={key}>
                                <Direction stepNum={val.step_num} step={val.step} />
                            </li>
                        </ul>
                    );
                })
            )}
        </Box>
    )
}

export default DirectionsList;