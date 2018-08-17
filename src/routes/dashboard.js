import ProfilePage from 'layouts/Profile/index.jsx'
import ProjectPage from 'layouts/Project/index.jsx'
import Condition from 'layouts/Condition/index.jsx';
import { Data } from 'containers/Data/index.js'

const dashboardRoutes = [
  {
    path: "/dashboard/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    component: ProfilePage
  },
  {
    path: "/dashboard/project",
    sidebarName: "project",
    navbarName: "project",
    component: ProjectPage
  },
  {
    path: "/dashboard/condition",
    sidebarName: "Condition",
    navbarName: "Condition",
    component: Condition
  },
  {
    path: "/dashboard/data",
    sidebarName: "data",
    navbarName: "data",
    component: Data
  },
  // { redirect: true, path: "/dashboard", to: "/dashboard/profile", navbarName: "Redirect" }
]

export default dashboardRoutes
