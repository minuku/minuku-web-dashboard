import { setSnackbar } from "./snackbar";

const url = `https://minukutest.nctu.me/minukutest`;

export const getQuestionnaires = projectName => {
  const success = payload => {
    return { type: "GET_QUESTIONNAIRES_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Loading Questionnaires..." }));
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
        dispatch(
          setSnackbar({ message: "Questionnaires loaded Successfully!" })
        );
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const addQuestionnaire = (projectName, data) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Creating Questionnaire..." }));
    fetch(`${url}/project/${projectName}/questionnaire?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      method: "POST"
    })
      .then(json => {
        dispatch(getQuestionnaires(projectName));
        dispatch(
          setSnackbar({ message: "Questionnaires created Successfully!" })
        );
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const updateQuestionnaire = (projectName, questionnaireName, data) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Updating Questionnaire..." }));
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
        dispatch(
          setSnackbar({ message: "Questionnaires updated Successfully!" })
        );
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const deleteQuestionnaire = (projectName, questionnaireName) => {
  return dispatch => {
    let token = localStorage.getItem(`token`);

    dispatch(setSnackbar({ message: "Deleting Questionnaire..." }));
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
        dispatch(
          setSnackbar({ message: "Questionnaires deleted Successfully!" })
        );
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};
