import { authHeader } from 'utils/authHeader'
const apiUrl = `http://localhost:3000`

const login = (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  return fetch(`${apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }
      return user
    })
}

const register = (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  return fetch(`${apiUrl}/users/register`, requestOptions).then(handleResponse)
}
const logout = () => {
  localStorage.removeItem('user')
}

const queryProfile = (user) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/users/1`, requestOptions).then(handleResponse)
}

const handleResponse = (response) => {
  return response.json().then(data => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        window.location.reload()
      }
      const error = (data && data.error) || response.statusText
      return Promise.reject(error)
    }
    return data;
  })
}



export const userService = {
    login,
    register,
    queryProfile
}
