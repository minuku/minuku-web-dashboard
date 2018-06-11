import { Login } from 'containers/Account/Login.js'
import SignupPage from 'layouts/Account/Signup.jsx'

const accountRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: SignupPage
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
]

export default accountRoutes
