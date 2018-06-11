const accounts = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return state
    case "LOGIN_SUCCESS":
      return {...state, payload: action.payload}
    default:
      return state
  }
}

export default accounts
