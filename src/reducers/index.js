import { combineReducers } from "redux";
import account from "./account";
import data from "./data";
import projects from "./projects";
import situations from "./situations";
import conditionData from "./conditionData.js";

const minuku = combineReducers({
  account,
  data,
  conditionData,
  projects,
  situations
});

export default minuku;
