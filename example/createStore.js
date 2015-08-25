import { createStore, compose } from 'redux';
import storeEnhancer from 'redux-react-router-transitions';

import reducers from './reducers/';

export default (router) => {
  const finalCreateStore = compose(
    storeEnhancer(router),
    createStore
  );

  return () => finalCreateStore(reducers);
}
