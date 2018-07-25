import { combineReducers } from "redux"
import account from "./account"
import conditionReducer from "./condition.js"

const minuku = combineReducers({
  account,
  conditionReducer
})

export default minuku
