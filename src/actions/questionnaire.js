const url = `https://minukutest.nctu.me/minukutest`;

export const getQuestionnaires = projectName => {
  const success = payload => {
    return { type: "ADD_SITUATION_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/questionnaire?token=${token}`, {
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
      });
  };
};

export const addQuestionnaire = (projectName, data) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/questionnaire?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      method: "POST"
    })
      .then(json => {
        dispatch(getQuestionnaires(projectName));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};

export const updateQuestionnaire = (projectName, questionnaireName, data) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/${projectName}/questionnaire/${questionnaireName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        method: "PUT"
      }
    )
      .then(json => {
        dispatch(getQuestionnaires(projectName));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};

export const deleteQuestionnaire = (projectName, questionnaireName) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);

    fetch(
      `${url}/project/${projectName}/questionnaire/${questionnaireName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(() => {
        dispatch(getQuestionnaires(projectName));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};
