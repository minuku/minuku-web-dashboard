import ProfilePage from 'layouts/Profile/index.jsx'

const dashboardRoutes = [
  {
    path: "/dashboard/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    component: ProfilePage
  },
  // { redirect: true, path: "/dashboard", to: "/dashboard/profile", navbarName: "Redirect" }
]

export default dashboardRoutes
