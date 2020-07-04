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

export const getShopDetails = (shop) => {
  return {
    type: "GET_SHOP_DETAILS",
    shop: shop,
  }
}

// Fetch API

export const fetchShopList = () => {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/trucks/`)
      .then(response => response.json())
      .then(json => dispatch(getShopList(json)))
  }
}

export const fetchShopDetails = (id) => {
  return (dispatch) => {
    return Promise.all([
      fetch(`${process.env.REACT_APP_API_URL}/trucks/${id}`),
      fetch(`${process.env.REACT_APP_API_URL}/trucks/${id}/entrees`),
      fetch(`${process.env.REACT_APP_API_URL}/trucks/${id}/drinks`),
      fetch(`${process.env.REACT_APP_API_URL}/trucks/${id}/reviews`),
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        let truck = data[0][0];
        truck.entrees = data[1];
        truck.drinks = data[2];
        truck.reviews = data[3];
        dispatch(getShopDetails(truck));
      })
      .catch(error => console.log(error));
  };
}


