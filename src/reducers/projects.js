const projects = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return state;
    case "GET_PROJECTS_SUCCESS":
      return [...action.payload];
    case "GET_PROJECTS_ERROR":
      return state;
    case "ADD_PROJECT":
      return state;
    case "ADD_PROJECT_SUCCESS":
      return [...state, action.payload];
    case "ADD_PROJECT_ERROR":
      return state;
    case "DELETE_PROJECT":
      return state;
    case "DELETE_PROJECT_SUCCESS":
      const index = state.findIndex(name => name === action.payload) || -1;
      return index >= 0
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state;
    case "DELETE_PROJECT_ERROR":
    default:
      return state;
  }
};

export default projects;
