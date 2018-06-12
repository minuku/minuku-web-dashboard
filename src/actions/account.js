import { userService } from 'utils/userService'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export const fetchLoginWithRedux = (user = {account: 'armuro', password: 'minuku'}) => {
  const request = (user) => { return { type: "LOGIN_REQUEST", user } }
  const success = (payload) => { return { type: "LOGIN_SUCCESS", payload } }
  const failure = (error) => { return { type: "LOGIN_ERROR",  error } }

  return dispatch => {
    dispatch(request(user))
    userService.login(user)
    .then(
      user => {
        dispatch(success())
        history.push('/dashboard')
      },
      error => {
        dispatch(failure(error))
      }
    )
  }
}


export const register = (user = {account: 'armuro', password: 'minuku'}) => {
  const request = (user) => { return { type: `REGISTER_REQUEST`, user } }
  const success = (user) => { return { type: `REGISTER_SUCCESS`, user } }
  const failure = (error) => { return { type: `REGISTER_ERROR`, error } }
  return dispatch => {
    dispatch(request(user))
    userService.register(user)
    .then(
      user => {
          dispatch(success())
          history.push('/login')
          // dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error))
        // dispatch(alertActions.error(error))
      }
    )
  }
}

export const logout = () => {
  // userService.logout()
  return { type: "LOGOUT" }
}
