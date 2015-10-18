import {
  ITEM_CREATE,
  ITEM_DELETE,
} from '../constants/ActionTypes';

let id = 0;

export default {

  addItem(title) {
    return {
      type: ITEM_CREATE,
      payload: {
        item: {
          title,
          id: ++id
        }
      },
      meta: {
        transition: (prevState, { items: { lastItemId } }, action) => ({
          path: `/item-details/${lastItemId}`,
        })
      }
    };
  },

  removeItem(id) {
    return {
      type: ITEM_DELETE,
      payload: {
        id
      },
      meta: {
        transition: (prevState, nextState, action) => ({
          path: '/item-list'
        })
      }
    };
  }
}
