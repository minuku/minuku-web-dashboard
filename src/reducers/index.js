import { combineReducers } from "redux";
import account from "./account";
import data from "./data";
import projects from "./projects";
import situations from "./situations";

const minuku = combineReducers({
  account,
  data,
  projects,
  situations
});

export default minuku;
