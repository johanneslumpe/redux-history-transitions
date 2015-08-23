import {
  ITEM_CREATE,
  ITEM_DELETE
} from '../constants/ActionTypes';

const initialState = {
  lastItemId: null,
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case ITEM_CREATE:
      return {
        items: [
          ...state.items,
          payload.item
        ],
        lastItemId: payload.item.id
      };

    case ITEM_DELETE:
      const { id } = payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id)
      };

    default:
      return state;
  }

}
