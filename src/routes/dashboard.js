import ProfilePage from 'layouts/Profile/index.jsx'
import DataPage from 'layouts/Data/index.jsx'

const dashboardRoutes = [
  {
    path: "/dashboard/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    component: ProfilePage
  },
  {
    path: "/dashboard/data",
    sidebarName: "data",
    navbarName: "data",
    component: DataPage
  },
  // { redirect: true, path: "/dashboard", to: "/dashboard/profile", navbarName: "Redirect" }
]

export default dashboardRoutes
