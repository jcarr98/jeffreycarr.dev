import React from 'react';
import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

import AppBar from './components/AppBar';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.light = {
            global: {
                colors: {
                    h: "#d0d1d6",
                    b: "fafbff"
                },
                font: {
                    family: 'Roboto',
                    size: '18px',
                    height: '20px',
                },
            },
        };

        this.dark = {
            global: {
                colors: {
                    h: "#4b4c4f",
                    b: "#636569"
                },
                font: {
                    family: 'Roboto',
                    size: '18px',
                    height: '20px',
                },
            },
        };

        this.state = {
            i: 0,
            t: this.light,
            showSidebar: false
        };

        this.changeTheme = this.changeTheme.bind(this);
        this.showSidebar = this.showSidebar.bind(this);
    }

    changeTheme() {
        if(this.state.i === 0) {
            console.log("Turning dark...");
            this.setState({
                i: 1,
                t: this.dark
            });
        } else {
            console.log("Turning light...");
            this.setState({
                i: 0,
                t: this.light
            });
        }
    }

    showSidebar() {
        if(this.state.showSidebar === false) {
            this.setState({
                showSidebar: true
            });
        } else {
            this.setState({
                showSidebar: false
            });
        }
    }

    render() {
        return(
            <Grommet theme={this.state.t} full>
                <Box fill>
                    <AppBar bg='h'>
                        <Heading level='3' margin='none'>My App</Heading>
                        <Button icon={<Notification />} onClick={this.showSidebar} />
                    </AppBar>

                    <Box direction='row' flex overflow={{ horizontal: 'hidden'}}>
                        <Box flex align='center' justify='center' background="b">
                            <Button primary onClick={this.changeTheme} label="Change Theme" />
                        </Box>
                        <Collapsible direction='horizontal' open={this.state.showSidebar}>
                            <Box
                                flex
                                width='small'
                                background='h'
                                elevation='small'
                                align='center'
                                justify='center'
                            >
                                sidebar
                            </Box>
                        </Collapsible>
                    </Box>
                </Box>


                {/* <Button primary onClick={this.changeTheme} label="Click here to change theme" /> */}
            </Grommet>
        );
    }
}

export default App;