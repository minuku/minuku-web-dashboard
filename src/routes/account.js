import { Login } from 'containers/Account/Login.js'
import { Signup } from 'containers/Account/Signup.js'

const accountRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: Signup
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
]

export default accountRoutes
