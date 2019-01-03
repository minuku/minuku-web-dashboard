import { setSnackbar } from "./snackbar";

let url = `https://minukutest.nctu.me/minukutest`;

export const getSituations = projectName => {
  const success = payload => {
    return { type: "GET_SITUATIONS_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Loading Situations ..." }));
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
        dispatch(setSnackbar({ message: "Situations loaded successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const addSituation = (projectName, data) => {
  const success = payload => {
    return { type: "ADD_SITUATION_SUCCESS", payload };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Creating Situation..." }));
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
        dispatch(setSnackbar({ message: "Situation created successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const updateSituation = (projectName, situationName, data) => {
  const success = payload => {
    return { type: "UPDATE_SITUATION_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Updating Situation..." }));
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
        dispatch(setSnackbar({ message: "Situation updated successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const deleteSituation = (projectName, situationName) => {
  const success = payload => {
    return { type: "DELETE_SITUATION_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);

    dispatch(setSnackbar({ message: "Deleting Situation..." }));
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
        dispatch(setSnackbar({ message: "Situation deleted successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};
