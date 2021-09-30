import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RecipeMenu from './pages/recipe_menu/RecipeMenu';
import Recipe from './pages/recipe/Recipe';
import Oops from '../../globals/pages/Oops';

function RecipeRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={RecipeMenu} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route component={Oops} />
            </Switch>
        </Router>
    );
}

export default RecipeRouter;