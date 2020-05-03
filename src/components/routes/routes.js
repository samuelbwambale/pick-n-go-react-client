import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import ItemList from '../items/ItemList';
import ItemList2 from '../items/ItemList2';
import NotFound from '../notFound/notFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ItemList2} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;