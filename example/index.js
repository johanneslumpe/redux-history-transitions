import React from 'react';
import { create as createRouter, HistoryLocation } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes/';
import createStore from './createStore';

const router = createRouter({
  location: HistoryLocation,
  routes
});

const store = createStore(router)();

router.run((Handler, state) => {
  React.render((
    <Provider store={store}>
      {() => <Handler {...state} />}
    </Provider>
  ), document.getElementById('app'));
});
