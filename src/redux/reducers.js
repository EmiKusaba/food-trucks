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
    case 'DELETE_SHOP':
      const shops = [...state];
      shops.splice(action.value, 1);
      return shops
    default:
      return state
  }
}
export default combineReducers({ user, shops })