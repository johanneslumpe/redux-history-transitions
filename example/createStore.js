import { createStore, compose } from 'redux';
import storeEnhancer from 'redux-react-router-transitions';

import reducers from './reducers/';

export default (router, catchAllHandler) => {
  const finalCreateStore = compose(
    storeEnhancer(router, catchAllHandler),
    createStore
  );

  return () => finalCreateStore(reducers);
}
