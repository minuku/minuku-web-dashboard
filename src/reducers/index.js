import { combineReducers } from "redux"
import account from "./account"
import data from "./data"
const minuku = combineReducers({
  data,
  account
})

export default minuku
