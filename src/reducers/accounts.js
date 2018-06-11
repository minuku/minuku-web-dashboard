const accounts = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return state
    case "LOGIN_SUCCESS":
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default accounts
