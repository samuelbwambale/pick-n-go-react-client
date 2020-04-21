import * as ItemActions from '../actions/itemActions';

const initialState = {
  itemCreated: {},
  itemUpdated: {},
  itemDeleted: '',
  allItems: [],
  singleItem: {},
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ItemActions.CREATE_ITEM:
      return { ...state, itemCreated: action.payload };
    case ItemActions.UPDATE_ITEM_DETAILS:
      return { ...state, itemUpdated: action.payload };
    case ItemActions.DELETE_ITEM:
      return { ...state, itemDeleted: action.payload };
    case ItemActions.GET_ALL_ITEMS:
      return { ...state, allItems: action.payload };
    case ItemActions.GET_SINGLE_ITEM:
      return { ...state, singleItem: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;