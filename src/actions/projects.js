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
        console.log(`projects ->`, projects);
        dispatch(success(projects));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};
