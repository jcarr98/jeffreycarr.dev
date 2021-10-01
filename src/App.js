import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';

/**
 * Determines which app to start up depending on which (sub)domain the user visits
 * @returns The App to run based on the user's input
 */
function App() {
    const title = "Jeffrey Carr";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/resume" exact component={Resume} />
            </Switch>
        </Router>
    );
}

export default App;