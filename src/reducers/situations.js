

const situations = (state = [], action) => {
  switch (action.type) {
    case "GET_SITUATIONS":
      return state;
    case "GET_SITUATIONS_SUCCESS":
      return [ ...action.payload.data ];
    case "GET_SITUATIONS_ERROR":
      return state;
    case "ADD_SITUATION":
      return state;
    case "ADD_SITUATION_SUCCESS":
      return [ ...state, action.payload.data ];
    case "ADD_SITUATION_ERROR":
      return state;
    case "UPDATE_SITUATION":
      return state;
    case "UPDATE_SITUATION_SUCCESS":
      return [ ...state, action.payload.data ];
    case "UPDATE_SITUATION_ERROR":
    case "DELETE_SITUATION":
      return state;
    case "DELETE_SITUATION_SUCCESS":
      return state;
    case "DELETE_SITUATION_ERROR":
    default:
      return state;
  }
};

export default situations;
