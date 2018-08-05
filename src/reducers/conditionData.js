import { initConditionRequest, initConditionSuccess, initConditionFail,
  updateConditionRequest, updateConditionFail, updateConditionSuccess,
  addConditionRequest, addConditionSuccess, addConditionFail,
  deleteConditionRequest, deleteConditionSuccess, deleteConditionFail
}  from "../constants/constants.js";
import _ from 'lodash';

const conditionData = (state = {}, action) => {
  switch (action.type) {
    case updateConditionRequest:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isLoading = true;
      return returnState;
    }
    case updateConditionSuccess:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataList[action.index] = action.payload;
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case updateConditionFail:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isError = true;
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case addConditionRequest:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isLoading = true;
      return returnState;
    }
    case addConditionSuccess:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataList = [...returnState.dataList, action.payload];
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case addConditionFail:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isError = true;
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case deleteConditionRequest:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isLoading = true;
      return returnState;
    }
    case deleteConditionSuccess:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataList.splice(action.index, 1);
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case deleteConditionFail:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isError = true;
      returnState.dataState.isLoading = false;
      return returnState;
    }
    case initConditionRequest:
    {
      let returnState = {
        dataList: [],
        dataState: {
          isLoading: true,
          isError: false
        },
      };
      
      return returnState;
    }
    case initConditionSuccess:
    {
      let returnState = _.cloneDeep(state);
      _.map(action.payload, (item, index) => {
        returnState.dataList[index] = _.cloneDeep(item.conditionContent);
        returnState.dataList[index]['isOpen'] = false;
        returnState.dataList[index]['name'] = item.conditionName;
        returnState.dataList[index]['schedule_from'] = item.conditionContent.startTime? true: false; 
        returnState.dataList[index]['schedule_last'] = item.conditionContent.duration? true: false;
      })
      returnState.dataState.isLoading = false;
      return returnState;
    } 
    case initConditionFail:
    {
      let returnState = _.cloneDeep(state);
      returnState.dataState.isLoading = false;
      returnState.dataState.isError = true;
      return returnState;
    }
    default:
      return state;
  }
}

export default conditionData