import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './pages/Menu';
import TestPage from './pages/TestPage';
import Recipe from './pages/Recipe';
import Oops from '../../globals/pages/Oops';

function RecipeRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/test" exact component={TestPage}/>
                <Route path="/recipe/:id" component={Recipe} />
                <Route component={Oops} />
            </Switch>
        </Router>
    );
}

export default RecipeRouter;