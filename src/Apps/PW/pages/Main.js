import React from 'react';

import AppBar from '../../../globals/components/AppBar';

function Main() {
    return(
        <div>
            <AppBar />
            <h1>Main page</h1>
            <a href="http://localhost:3000/projects">To Projects</a>
        </div>
    );
}

export default Main;