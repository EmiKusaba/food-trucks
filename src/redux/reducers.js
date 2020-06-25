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

export default combineReducers({ user, shops })