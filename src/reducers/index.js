import { combineReducers } from "redux"
import account from "./account"
import conditionData from "./conditionData.js"

const minuku = combineReducers({
  account,
  conditionData
})

export default minuku
