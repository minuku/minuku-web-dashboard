import { initCondition, 
         updateCondition, 
         addCondition, 
         deleteCondition } 
from "../constants/constants.js"

export const onInitCondition = () => ({
  type: initCondition,
})

export const onUpdateCondition = (payload) => ({
  type: updateCondition,
  payload
})

export const onAddCondition = (payload) => ({
  type: addCondition,
  payload
})

export const onDeleteCondition = (payload) => ({
  type: deleteCondition,
  payload
})

/*export const onFetchInitCondition = (payload) => (
  {
    type: initCondition,
    payload,
    callBack: (response, dispatch) => dispatch(onInitCondition(response)),
  }
);

export const onFetchUpdateCondition = (payload) => (
  {
    type: updateCondition,
    payload,
    callBack: (response, dispatch) => dispatch(onUpdateCondition(response)),
  }
);

export const onFetchAddCondition = (payload) => (
  {
    type: addCondition,
    payload,
    callBack: (response, dispatch) => dispatch(onAddCondition(response)),
  }
);

export const onFetchDeleteCondition = (payload) => (
  {
    type: deleteCondition,
    payload,
    callBack: (response, dispatch) => dispatch(onDeleteCondition(response)),
  }
);*/
