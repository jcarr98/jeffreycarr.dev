import { Grommet } from 'grommet';
import React from 'react';
import AppBar from '../../../globals/components/AppBar';

function TestPage() {
    return(
        <Grommet>
            <AppBar />
            <h1>This is a test page.</h1>
            <a href="http://recipe.localhost:3000">Back to Recipe Book</a>
        </Grommet>
    );
}

export default TestPage;