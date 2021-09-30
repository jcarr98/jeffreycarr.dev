import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';

import RecipeMenu from './pages/RecipeMenu';
import Recipe from './pages/Recipe';
import Oops from '../../globals/pages/Oops';

function RecipeRouter() {
    return(
        <CookiesProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={RecipeMenu} />
                    <Route path="/recipe/:id" component={Recipe} />
                    <Route component={Oops} />
                </Switch>
            </Router>
        </CookiesProvider>
    );
}

export default RecipeRouter;