let url = `https://minukutest.nctu.me/minukutest`;

export const getSituations = projectName => {
  const request = () => {
    return { type: "GET_SITUATIONS" };
  };
  const success = payload => {
    return { type: "GET_SITUATIONS_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "GET_SITUATIONS_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/situation?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) throw new Error(json.error);
        dispatch(success({ data: json }));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const addSituation = (projectName, data) => {
  const request = () => {
    return { type: "ADD_SITUATION" };
  };
  const success = payload => {
    return { type: "ADD_SITUATION_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "ADD_SITUATION_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/situation?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      method: "POST"
    })
      .then(json => {
        dispatch(success({ data: json }));
        dispatch(getSituations(projectName));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const updateSituation = (projectName, situationName, data) => {
  const request = () => {
    return { type: "UPDATE_SITUATION" };
  };
  const success = payload => {
    return { type: "UPDATE_SITUATION_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "UPDATE_SITUATION_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/${projectName}/situation/${situationName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        method: "PUT"
      }
    )
      .then(json => {
        dispatch(success({ data: json }));
        dispatch(getSituations(projectName));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const deleteSituation = (projectName, situationName) => {
  const request = () => {
    return { type: "DELETE_SITUATION" };
  };
  const success = payload => {
    return { type: "DELETE_SITUATION_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "DELETE_SITUATION_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);

    fetch(
      `${url}/project/${projectName}/situation/${situationName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(() => {
        dispatch(success());
        dispatch(getSituations(projectName));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};
