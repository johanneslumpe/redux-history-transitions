import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createBrowserHistory';
import { useQueries } from 'history';

import routes from './routes/';
import createStore from './createStore';
import { TRANSITION_TO_ROOT } from './constants/ActionTypes';

const history = useQueries(createHistory)();

const store = createStore(history, (state, { type }) => {
  if (type === TRANSITION_TO_ROOT) {
    // this does not do anything useful right now, but serves
    // as an example how a catch-all handler could be used
    const { lastItemId } = state.items;
    const query = lastItemId ? { lastItemId } : null;
    return { path: '/', query };
  }
})();

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('app'));
