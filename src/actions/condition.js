import { getSituations } from "./situations";
import { setSnackbar } from "./snackbar";

const url = `https://minukutest.nctu.me/minukutest`;

export const updateCondition = (
  projectName,
  situationName,
  conditionName,
  payload
) => {
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
    dispatch(setSnackbar({ message: "Updating conditon..." }));
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
        if (response.ok) {
          dispatch(getSituations(projectName));
          dispatch(setSnackbar({ message: "Conditon updated successfully!" }));
        } else throw Error(response.statusText);
      })
      .catch(error => {
        dispatch(setSnackbar({ message: error.toString() }));
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
    dispatch(setSnackbar({ message: "Creating conditon..." }));

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
        if (response.ok) {
          dispatch(getSituations(projectName));
          dispatch(setSnackbar({ message: "Conditon created successfully!" }));
        } else throw Error(response.statusText);
      })
      .catch(error => {
        dispatch(setSnackbar({ message: error.toString() }));
      });
  };
};

export const deleteCondition = (projectName, situationName, conditionName) => {
  const token = localStorage.getItem(`token`);

  return dispatch => {
    dispatch(setSnackbar({ message: "Deleting conditon..." }));
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
        if (response.ok) {
          dispatch(getSituations(projectName));
          dispatch(setSnackbar({ message: "Conditon deleted successfully!" }));
        } else throw Error(response.statusText);
      })
      .catch(error => {
        dispatch(setSnackbar({ message: error.toString() }));
      });
  };
};
