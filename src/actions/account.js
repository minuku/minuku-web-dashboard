export const fetchLoginWithRedux = () => {
  const request = (user) => { return { type: "LOGIN_REQUEST", user } }
  const success = (payload) => { return { type: "LOGIN_SUCCESS", payload } }
  const failure = (error) => { return { type: "LOGIN_ERROR",  error } }

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

  return (dispatch) => {
    dispatch(request())
    return fetchLogin().then(([response, json]) => {
        if(response.status === 200){
        dispatch(success(json))
      }
      else {
        dispatch(failure())
      }
    })
  }
}


export const register = (user) => {
  const request = (user) => { return { type: `REGISTER_REQUEST`, user } }
  // const success = (user) => { return { type: `REGISTER_SUCCESS`, user } }
  // const failure = (error) => { return { type: `REGISTER_ERROR`, error } }
  return dispatch => {
    dispatch(request(user))
    // userService.register(user)
    // .then(
    //   user => {
    //       dispatch(success())
    //       // history.push('/dashboard')
    //       // dispatch(alertActions.success('Registration successful'));
    //   },
    //   error => {
    //     dispatch(failure(error))
    //     // dispatch(alertActions.error(error))
    //   }
    // )
  }
}

export const logout = () => {
  // userService.logout()
  return { type: "LOGOUT" }
}
