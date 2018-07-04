import ProfilePage from 'layouts/Profile/index.jsx'
import ProjectPage from 'layouts/Project/index.jsx'

const dashboardRoutes = [
  {
    path: "/dashboard/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    component: ProfilePage
  },
  {
    path: "/dashboard/project",
    sidebarName: "Project",
    navbarName: "Project",
    component: ProjectPage
  },
  // { redirect: true, path: "/dashboard", to: "/dashboard/profile", navbarName: "Redirect" }
]

export default dashboardRoutes
