import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../constants/ActionTypes';

export default {

  login() {
    return {
      type: LOGGED_IN
    };
  },

  logout() {
    return {
      type: LOGGED_OUT
    };
  }
}
