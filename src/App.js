import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RecipeRouter from './Apps/RecipeBook/RecipeRouter';
import WebsiteRouter from './Apps/PW/WebsiteRouter';

/**
 * Determines which app to start up depending on which (sub)domain the user visits
 * @returns The App to run based on the user's input
 */
function App() {

    if(window.location.host.split('.')[0] === 'recipe') {
        return (
            <Router>
                <RecipeRouter />
            </Router>
            
        );
    }
    else {
        return (
            <Router>
                <WebsiteRouter />
            </Router>
        );
    }
}

export default App;