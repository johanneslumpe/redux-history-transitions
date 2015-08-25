import React from 'react';
import { create as createRouter, HistoryLocation } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes/';
import createStore from './createStore';
import { TRANSITION_TO_ROOT } from './constants/ActionTypes';

const router = createRouter({
  location: HistoryLocation,
  routes
});

const store = createStore(router, (state, { type }) => {
  if (type === TRANSITION_TO_ROOT) {
    // this does not do anything useful right now, but serves
    // as an example how a catch-all handler could be used
    const { lastItemId } = state.items;
    const query = lastItemId ? { lastItemId } : null;
    return { path: '/', query };
  }
})();

router.run((Handler, state) => {
  React.render((
    <Provider store={store}>
      {() => <Handler {...state} />}
    </Provider>
  ), document.getElementById('app'));
});
