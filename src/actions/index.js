const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST"
  }
}

const loginSuccess = (payload) => {
  return {
    type: "LOGIN_SUCCESS",
    payload
  }
}

const loginError = () => {
  return {
    type: "LOGIN_ERROR"
  }
}

export const fetchLoginWithRedux = () => {
  return (dispatch) => {
    dispatch(loginRequest())
    return fetchLogin().then(([response, json]) => {
        if(response.status === 200){
        dispatch(loginSuccess(json))
      }
      else {
        dispatch(loginError())
      }
    })
  }
}

const fetchLogin = () => {
  const URL = `https://reqres.in/api/login`
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "peter@klaven",
      "password": "cityslicka"
    })
  })
  .then(response => Promise.all([response, response.json()]))
}
