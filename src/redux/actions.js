export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user,
  }
}

export const getShopList = (shops) => {
  return {
    type: "GET_SHOP_LIST",
    shops: shops,
  }
}

export const addReview = (review) => {
  return {
    type: "ADD_REVIEW",
    value: review,
  }
}

// Fetch API

export const fetchShopList = () => {
  return (dispatch) => {
    return fetch("http://localhost:4001/trucks/")
    .then(response => response.json())
    .then(json => dispatch(getShopList(json)))
  }
}

