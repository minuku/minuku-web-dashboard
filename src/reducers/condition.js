import { initCondition, 
         updateCondition,
         addCondition,
         deleteCondition
      }  from "../constants/constants.js"
import _ from 'lodash';

const conditionReducer = (state = [], action) => {
  switch (action.type) {
    case updateCondition:
    {
      let tmpCondition = _.cloneDeep(state);
      tmpCondition[action.index] = action.payload;
      return tmpCondition;
    }
    case addCondition:
    {
      let tmp = _.cloneDeep(state);
      return [...tmp, action.payload];
    }
    case deleteCondition:
    {
      let tmpCondition = _.cloneDeep(state);
      tmpCondition.splice(action.index, 1);
      return tmpCondition;
    }
    case initCondition:
    {
      let returnState = [];
      _.map(action.payload, (item, index) => {
        returnState[index] = _.cloneDeep(item.conditionContent);
        returnState[index]['isOpen'] = false;
        returnState[index]['name'] = item.conditionName;
        returnState[index]['schedule_from'] = item.conditionContent.startTime; 
        returnState[index]['schedule_last'] = item.conditionContent.endTime;
      })
      return returnState;
    } 
    default:
      return state;
  }
}

export default conditionReducer