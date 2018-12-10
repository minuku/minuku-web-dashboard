const account = (state = [], action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return state;
    case "REGISTER_SUCCESS":
      return { ...state, ...action.payload };
    case "REGISTER_ERROR":
      return state;
    case "LOGIN_REQUEST":
      return state;
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGIN_ERROR":
      return state;
    case "GET_USER_REQUEST":
      return state;
    case "GET_USER_SUCCESS":
      return { ...state, ...action.payload };
    case "GET_USER_ERROR":
      return state;
    default:
      return state;
  }
};

export default account;
