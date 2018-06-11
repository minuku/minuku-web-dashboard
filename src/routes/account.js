import LoginPage from 'layouts/Account/Login.jsx'
import RegisterPage from 'layouts/Account/Register.jsx'

const accountRoutes = [
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/register",
    component: RegisterPage
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
]

export default accountRoutes
