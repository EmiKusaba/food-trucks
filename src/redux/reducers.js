import { combineReducers } from 'redux'

const user = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.value;
    default:
      return state
  }
}
const shops = (state = [], action) => {
  switch (action.type) {
    case "GET_SHOP_LIST": {
      const shops = [...action.shops];
      return shops;
    }
    case "GET_SHOP_DETAILS": {
      if (!action.shop) {
        return state;
      }
      if (!state || state.length === 0) {
        return [action.shop];
      }
      return state.map((shop) => {
        if (shop.id === action.shop.id) {
          return Object.assign(shop, action.shop);
        }
        return shop;
      });
    }
    default:
      return state
  }
}

export default combineReducers({ user, shops })