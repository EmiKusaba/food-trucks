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

export const fetchShopDetails = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:4001/trucks/${id}`)
      .then(response => response.json())
      .then(truckJson => {
        fetch(`http://localhost:4001/trucks/${id}/reviews`)
          .then(response => response.json())
          .then(reviewsJson => {
            fetch(`http://localhost:4001/trucks/${id}/entrees`)
              .then(response => response.json())
              .then(entreesJson => {
                fetch(`http://localhost:4001/trucks/${id}/drinks`)
                  .then(response => response.json())
                  .then(drinksJson => {
                    truckJson = truckJson[0];
                    truckJson.reviews = reviewsJson;
                    truckJson.entrees = entreesJson;
                    truckJson.drinks = drinksJson;
                    console.log(truckJson);
                    dispatch(getShopDetails(truckJson))
                  });
              });
          });
      });
  }
}

