import { getSituations } from './situations'

const url = `https://minukutest.nctu.me/minukutest`;

export const updateCondition = (projectName, situationName, conditionName, payload) => {

  const token = localStorage.getItem(`token`);

  return dispatch => {
    let tmpPayload = { ...projectName };
    delete tmpPayload.isOpen;
    delete tmpPayload.schedule_from;
    delete tmpPayload.schedule_last;
    let formalizePayload = {
      conditionName: payload.name,
      conditionContent: tmpPayload
    };
    fetch(
      `${url}/project/${projectName}/situation/${situationName}/condition/${conditionName}?token=${token}`,
      {
        body: JSON.stringify(formalizePayload),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT"
      }
    )
      .then(response => {
        if (response.ok) dispatch(getSituations(projectName));
        else throw Error(response.statusText);
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const addCondition = (projectName, situationName, payload) => {
  const token = localStorage.getItem(`token`);

  return dispatch => {
    let formalizePayload = {
      conditionName: payload.name,
      conditionContent: payload
    };
    fetch(
      `${url}/project/${projectName}/situation/${situationName}/condition?token=${token}`,
      {
        body: JSON.stringify(formalizePayload),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    )
    .then(response => {
      if (response.ok) dispatch(getSituations(projectName));
      else throw Error(response.statusText);
    })
      .catch(error => {
        console.error(error);
      });
  };
};

export const deleteCondition = (projectName, situationName, conditionName) => {
  const token = localStorage.getItem(`token`);

  return dispatch => {
    fetch(
      `${url}/project/${projectName}/situation/${situationName}/condition/${conditionName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }
    )
    .then(response => {
      if (response.ok) dispatch(getSituations(projectName));
      else throw Error(response.statusText);
    })
      .catch(error => {
        console.error(error);
      });
  };
};
