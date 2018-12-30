import { combineReducers } from "redux";
import account from "./account";
import data from "./data";
import projects from "./projects";
import situations from "./situations";
import questionnaires from "./questionnaires";

const minuku = combineReducers({
  account,
  data,
  projects,
  situations,
  questionnaires
});

export default minuku;
