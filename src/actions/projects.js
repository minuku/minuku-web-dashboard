let url = `https://minukutest.nctu.me/minukutest`;

export const getProjects = () => {
  const request = () => {
    return { type: "GET_PROJECTS" };
  };
  const success = payload => {
    return { type: "GET_PROJECTS_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "GET_PROJECTS_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(projects => {
        dispatch(success(projects));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const addProject = projectName => {
  const request = () => {
    return { type: "ADD_PROJECT" };
  };
  const success = payload => {
    return { type: "ADD_PROJECT_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "ADD_PROJECT_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
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
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const deleteProject = projectName => {
  console.log(projectName);
  const request = () => {
    return { type: "DELETE_PROJECT" };
  };
  const success = payload => {
    return { type: "DELETE_PROJECT_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "DELETE_PROJECT_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);

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
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};
