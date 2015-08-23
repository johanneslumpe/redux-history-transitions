import React from 'react';
import { Route } from 'react-router';

import AppContainer from '../containers/App';
import LoggedInContainer from '../containers/LoggedIn';
import ItemListContainer from '../containers/ItemList';
import ItemDetailsContainer from '../containers/ItemDetails';
import EntityNotFound from '../components/EntityNotFound';

export default (
  <Route path="/" handler={AppContainer}>
    <Route path="/logged-in" handler={LoggedInContainer} />
    <Route path="/item-list" handler={ItemListContainer} />
    <Route path="/item-details/:itemId" handler={ItemDetailsContainer} />
    <Route path="/entity-not-found" handler={EntityNotFound} />
  </Route>
);
