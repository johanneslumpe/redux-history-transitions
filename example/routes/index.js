import React from 'react';
import { Route } from 'react-router';

import AppContainer from '../containers/App';
import LoggedInContainer from '../containers/LoggedIn';
import ItemListContainer from '../containers/ItemList';
import ItemDetailsContainer from '../containers/ItemDetails';
import EntityNotFound from '../components/EntityNotFound';

export default (
  <Route path="/" component={AppContainer}>
    <Route path="/logged-in" component={LoggedInContainer} />
    <Route path="/item-list" component={ItemListContainer} />
    <Route path="/item-details/:itemId" component={ItemDetailsContainer} />
    <Route path="/entity-not-found" component={EntityNotFound} />
  </Route>
);
