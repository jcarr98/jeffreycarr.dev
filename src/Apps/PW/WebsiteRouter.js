import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Oops from '../../globals/pages/Oops';

function WebsiteRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/projects" exact component={Projects} />
                <Route component={Oops} />
            </Switch>
        </Router>
    );
}

export default WebsiteRouter;