import {
  ENTITY_NOT_FOUND,
  TRANSITION_TO_ROOT
} from '../constants/ActionTypes';

export default {

  entityNotFound() {
    return {
      type: ENTITY_NOT_FOUND,
      meta: {
        transition: (prevState, nextState, action) => (
          { path: '/entity-not-found' }
        )
      }
    }
  },

  transitionToRoot() {
    // We could also add a meta transition here,
    // but this action demonstrates how we can use the
    // catch-all handler
    return {
      type: TRANSITION_TO_ROOT
    };
  }

}
