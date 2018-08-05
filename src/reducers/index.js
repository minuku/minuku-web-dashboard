import { combineReducers } from "redux"
import account from "./account"
import data from "./data"
import conditionData from "./conditionData.js"

const minuku = combineReducers({
  account,
  data,
  conditionData
})

export default minuku
