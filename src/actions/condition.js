import { initCondition,
         updateCondition,
         addCondition,
         deleteCondition
       }  from "../constants/constants.js"
import _ from 'lodash';

const url = `https://minukutest.nctu.me/minukutest`;
const projectName = `project1`;
const situationName = `situation1`;
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzMwODk4MTQsInN1YiI6ImFybXVybyIsImV4cCI6MTU2NDYyOTQxNH0.3ZKAeHxNyVeuSJxo1kU_mQHhrtXprza9n5XNusBPeN0`;


export const onInitCondition = () => {
  const success = (payload) => {
    return{
      type: initCondition,
      payload
    };
  };

  return dispatch => {
    fetch(`${url}/project/${projectName}/situation/${situationName}/condition?token=${token}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
    })
    .then(response => {
      if(response.ok)
        return response.json();
      else
        throw Error(response.statusText);
    })
    .then(data => {
      dispatch(success(data));
    })
    .catch(error => {
      console.error(error);
    })
  }
}

export const onUpdateCondition = (index, payload, conditionName) => {
  const success = (index, payload) => {
    return{
      type: updateCondition,
      index,
      payload,
    };
  }

  return dispatch => {
    let tmpPayload = _.cloneDeep(payload);
    delete tmpPayload.isOpen;
    delete tmpPayload.schedule_from;
    delete tmpPayload.schedule_last;
    let formalizePayload = {
      conditionName: payload.name,
      conditionContent: tmpPayload
    }
    fetch(`${url}/project/${projectName}/situation/${situationName}/condition/${conditionName}?token=${token}`,{
      body: JSON.stringify(formalizePayload),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
    })
    .then(response => {
      if(response.ok)
        return response.json();
      else
        throw Error(response.statusText);
    })
    .then(message => {
      console.log(message.msg);
      dispatch(success(index, payload));
    })
    .catch(error => {
      console.error(error);
    })
    
  }
}

export const onAddCondition = (payload) => {
  const success = (payload) => {
    return{
      type: addCondition,
      payload
    };
  }

  return dispatch => {
    let formalizePayload = {
      conditionName: payload.name,
      conditionContent: payload
    }
    fetch(`${url}/project/${projectName}/situation/${situationName}/condition?token=${token}`,{
      body: JSON.stringify(formalizePayload),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
    })
    .then(response => {
      if(response.ok)
        return response.json();
      else
        throw Error(response.statusText);
    })
    .then(message => {
      console.log(message.msg);
      dispatch(success(payload));
    })
    .catch(error => {
      console.error(error);
    })
    
  }

}

export const onDeleteCondition = (index, conditionName) => {
  const success = (index) => {
    return {
      type: deleteCondition,
      index
    }
  }

  return dispatch => {
    fetch(`https://minukutest.nctu.me/minukutest/project/project1/situation/situation1/condition/${conditionName}?token=${token}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(response => {
      if(response.ok)
        return response.json();
      else
        throw Error(response.statusText);
    })
    .then(message => {
      console.log(message.msg);
      dispatch(success(index));
    })
    .catch(error => {
      console.error(error);
    })
  }

}
