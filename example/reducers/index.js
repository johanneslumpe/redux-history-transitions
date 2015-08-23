import { combineReducers } from 'redux';

import items from './items';
import session from './session';

export default combineReducers({
  items,
  session
})
