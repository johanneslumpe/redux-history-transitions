import {
  LOGGED_IN,
  LOGGED_OUT,
  ITEM_CREATE,
  ITEM_DELETE,
  ENTITY_NOT_FOUND
} from '../constants/ActionTypes';

export default {

  [LOGGED_IN]: (state, action) => ({
    path: '/logged-in'
  }),

  [LOGGED_OUT]: (state, action) => ({
    path: '/'
  }),

  [ITEM_CREATE]: ({ items: { lastItemId } }, action) => ({
    path: '/item-details/:itemId',
    params: {
      itemId: lastItemId
    }
  }),

  [ITEM_DELETE]: (state, action) => ({
    path: '/item-list'
  }),

  [ENTITY_NOT_FOUND]: (state, action) => ({
    path: '/entity-not-found'
  }),

}
