import { initConditionSuccess, initConditionFail, initConditionRequest,  
         updateConditionSuccess, updateConditionFail, updateConditionRequest,
         addConditionSuccess, addConditionFail, addConditionRequest,
         deleteConditionSuccess, deleteConditionFail, deleteConditionRequest
       }  from "../constants/constants.js"
import { dispatch } from "../../node_modules/rxjs/internal/observable/range";
const url = `https://minukutest.nctu.me/minukutest`;
const projectName = `project1`;
const situationName = `situation1`;
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzMwODk4MTQsInN1YiI6ImFybXVybyIsImV4cCI6MTU2NDYyOTQxNH0.3ZKAeHxNyVeuSJxo1kU_mQHhrtXprza9n5XNusBPeN0`;


export const onInitCondition = () => {
  
  const request = () => {
    return{
      type: initConditionRequest,
    }
  }

  const success = (payload) => {
    return{
      type: initConditionSuccess,
      payload
    };
  };

  const failure = (error) => {
    return{
      type: initConditionFail,
      error
    };
  };

  return dispatch => {
    dispatch(request);
    fetch(`${url}/project/${projectName}/situation/${situationName}/condition?token=${token}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log(data);
      dispatch(success(data));
    })
    .catch(err => {
      console.log("error", err);
      //dispatch(failure(err));
    })
  
    /*fetch(`https://minukutest.nctu.me/minukutest/project/project1/situation/situation1/condition/移動中?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzMwODk4MTQsInN1YiI6ImFybXVybyIsImV4cCI6MTU2NDYyOTQxNH0.3ZKAeHxNyVeuSJxo1kU_mQHhrtXprza9n5XNusBPeN0`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(response => {
      //return response.json();
      console.log(response);
    })
    .catch(err => {
      console.log("error", err);
      //dispatch(failure(err));
    })*/
  }
}

export const onUpdateCondition = (index, payload) => ({
  type: updateConditionRequest,
  index,
  payload
})

export const onAddCondition = (payload) => ({
  type: addConditionRequest,
  payload
})

export const onDeleteCondition = (index) => ({
  type: deleteConditionRequest,
  index
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
