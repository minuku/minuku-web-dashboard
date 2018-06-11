import LoginPage from 'layouts/Account/Login.jsx'
import SignupPage from 'layouts/Account/Signup.jsx'

const accountRoutes = [
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/signup",
    component: SignupPage
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
]

export default accountRoutes
