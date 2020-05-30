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
    case 'ADD_SHOP':
      return [...state, action.value];
    case 'DELETE_SHOP': {
      const shops = [...state];
      shops.splice(action.value, 1);
      return shops
    }
    case 'ADD_REVIEW': {
      const shops = [...state];
      shops.forEach((shop) => {
        const review = action.value;
        if (shop.Id === Number(review.shopId)) {
          shop.reviews = [...shop.reviews, review];
        }
      });
      return shops;
    }
    default:
      return state
  }
}
const entrees = (state = null) => {
  return state;
}

const drinks = (state = null) => {
  return state;
}

export default combineReducers({ user, shops, entrees, drinks })