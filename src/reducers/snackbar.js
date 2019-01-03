const snackbar = (state = {}, action) => {
  switch (action.type) {
    case "SET_SNACKBAR":
      return { ...state, ...action.payload, open: true };
    case "CLOSE_SNACKBAR":
      return { ...state, open: false };
    default:
      return state;
  }
};

export default snackbar;
