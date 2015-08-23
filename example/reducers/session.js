import {
  LOGGED_IN,
  LOGGED_OUT
} from '../constants/ActionTypes';

const initialState = {
  loggedIn: false
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {

    case LOGGED_IN:
      return {
        loggedIn: true
      };

    case LOGGED_OUT:
      return {
        loggedIn: false
      };

    default:
      return state;
  }

}
