import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../constants/ActionTypes';

export default {

  login() {
    return {
      type: LOGGED_IN,
      meta: {
        transition: (state, action) => ({ path: '/logged-in'})
      }
    };
  },

  logout() {
    return {
      type: LOGGED_OUT,
      meta: {
        transition: (state, action) => ({ path: '/' })
      }
    };
  }
}
