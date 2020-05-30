export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user,
  }
}

export const addReview = (review) => {
  return {
    type: "ADD_REVIEW",
    value: review,
  }
}