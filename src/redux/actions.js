export const setUser = (user) => {
  console.log("FOO"); 
  return {
    type: "SET_USER",
    value: user,
  }
}