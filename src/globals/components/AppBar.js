import React from 'react';
import { Anchor, Box, Grommet, Header, Text } from 'grommet';

class AppBar extends React.Component {
    render() {
        return(
            // <Box
            //     tag='header'
            //     direction='row'
            //     align='center'
            //     justify='between'
            //     background={this.props.bg}
            //     pad={{ left: 'medium', right: 'small', vertical: 'small'}}
            //     elevation='medium'
            //     style={{ zIndex: '1'}}
            //     {...this.props}
            // />
            <Grommet>
                <Header background="#d2d4d2" justify="center">
                    <Anchor href="http://localhost:3000" label="Home" />
                    <Anchor href="http://recipe.localhost:3000" label="Recipe Book" />
                </Header>
            </Grommet>
        );
    }
}

export default AppBar