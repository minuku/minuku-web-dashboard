import { setSnackbar } from "./snackbar";

let url = `https://minukutest.nctu.me/minukutest`;

export const getProjects = () => {
  const success = payload => {
    return { type: "GET_PROJECTS_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Loading Projects..." }));
    fetch(`${url}/project?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(projects => {
        dispatch(success(projects));
        dispatch(setSnackbar({ message: "Project loaded Successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const addProject = projectName => {
  const success = payload => {
    return { type: "ADD_PROJECT_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Creating Project..." }));
    fetch(`${url}/project?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ projectName }),
      method: "POST"
    })
      .then(() => {
        dispatch(success(projectName));
        dispatch(getProjects());
        dispatch(setSnackbar({ message: "Project created Successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const deleteProject = projectName => {
  const success = payload => {
    return { type: "DELETE_PROJECT_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);

    dispatch(setSnackbar({ message: "Deleting conditon..." }));
    fetch(`${url}/project/${projectName}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        dispatch(success(projectName));
        dispatch(getProjects());
        dispatch(setSnackbar({ message: "Project deleted Successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};
