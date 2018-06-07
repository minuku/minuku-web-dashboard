import ProfilePage from 'layouts/Profile/index.jsx'

const dashboardRoutes = [
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    component: ProfilePage
  },
  { redirect: true, path: "/", to: "/profile", navbarName: "Redirect" }
]

export default dashboardRoutes
