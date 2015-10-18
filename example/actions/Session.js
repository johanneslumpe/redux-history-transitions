import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../constants/ActionTypes';

export default {

  login() {
    return {
      type: LOGGED_IN,
      meta: {
        transition: (prevState, nextState, action) => ({ path: '/logged-in'})
      }
    };
  },

  logout() {
    return {
      type: LOGGED_OUT,
      meta: {
        transition: (prevState, nextState, action) => ({ path: '/' })
      }
    };
  }
}
