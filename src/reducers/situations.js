const situations = (state = {}, action) => {
  switch (action.type) {
    case "GET_SITUATIONS":
      return state;
    case "GET_SITUATIONS_SUCCESS":
      const { data: names } = action.payload;
      const situations = names.map(name => ({ name }));
      return { ...state, [action.payload.projectName]: situations };
    case "GET_SITUATIONS_ERROR":
      return state;
    case "ADD_SITUATION":
      return state;
    case "ADD_SITUATION_SUCCESS":
      return { ...state, [action.payload.projectName]: action.payload.data };
    case "ADD_SITUATION_ERROR":
      return state;
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
