import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';
import Oops from '../../globals/pages/Oops';

function WebsiteRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/projects" exact component={Projects}/>
                <Route component={Oops} />
            </Switch>
        </Router>
    );
}

export default WebsiteRouter;