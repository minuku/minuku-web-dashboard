const projects = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return state;
    case "GET_PROJECTS_SUCCESS":
      return [...action.payload];
    case "GET_PROJECTS_ERROR":
      return state;
    default:
      return state;
  }
};

export default projects;
