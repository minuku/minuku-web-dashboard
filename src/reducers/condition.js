import { initConditionSuccess, initConditionFail, initConditionRequest,  
         updateConditionSuccess, updateConditionFail, updateConditionRequest,
         addConditionSuccess, addConditionFail, addConditionRequest,
         deleteConditionSuccess, deleteConditionFail, deleteConditionRequest
      }  from "../constants/constants.js"
import _ from 'lodash';

const defaultStart = new Date(2018, 11, 24, 10, 33, 30, 0);
const defaultEnd = new Date(2018, 11, 24, 12, 33, 30, 0);

const conditionReducer = (state = [], action) => {
  switch (action.type) {
    case updateConditionSuccess:
    {
      let tmpCondition = _.cloneDeep(state);
      tmpCondition[action.index] = action.payload;
      return tmpCondition;
    }
      
    case addConditionSuccess:
    {
      let tmp = _.cloneDeep(state);
      return [
        ...tmp,
        action.payload,
      ];
    }
    case deleteConditionSuccess:
    {
      let tmpCondition = _.cloneDeep(state);
      tmpCondition.splice(action.index, 1);
      return tmpCondition;
    }
      
    case initConditionRequest:
      return state;

    case initConditionSuccess:
    {
      let returnState = {};
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