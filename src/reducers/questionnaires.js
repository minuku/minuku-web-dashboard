const questionnaires = (state = [], action) => {
  switch (action.type) {
    case "GET_QUESTIONNAIRES_SUCCESS":
      return [...action.payload.data];
    case "ADD_QUESTIONNAIRE_SUCCESS":
      return [...state, action.payload.data];
    case "UPDATE_QUESTIONNAIRE_SUCCESS":
      return [...state, action.payload.data];
    case "DELETE_QUESTIONNAIRE_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default questionnaires;
