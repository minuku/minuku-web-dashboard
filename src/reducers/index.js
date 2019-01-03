import { combineReducers } from "redux";
import account from "./account";
import data from "./data";
import projects from "./projects";
import situations from "./situations";
import questionnaires from "./questionnaires";
import snackbar from "./snackbar";

const minuku = combineReducers({
  account,
  data,
  projects,
  situations,
  questionnaires,
  snackbar
});

export default minuku;
