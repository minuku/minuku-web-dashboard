import { initCondition, updateCondition, addCondition, deleteCondition }  from "../constants/constants.js"

const conditionReducer = (state = [], action) => {
  switch (action.type) {
    case updateCondition:
      console.log("Update condition!");
      break;
    case addCondition:
      console.log("Add condition!");
      break;
    case deleteCondition:
      console.log("Delete condition!");
      break;
    case initConditions:
      console.log("Initialize conditions!");
      break;
    default:
      break;
  }
}

export default conditionReducer