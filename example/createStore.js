import { createStore, compose } from 'redux';
import storeEnhancer from 'redux-history-transitions';

import reducers from './reducers/';

export default (history, catchAllHandler) => {
  const finalCreateStore = compose(
    storeEnhancer(history, catchAllHandler),
  )(createStore);

  return () => finalCreateStore(reducers);
}
