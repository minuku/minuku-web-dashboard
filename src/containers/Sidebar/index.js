import { connect } from "react-redux";
import SidebarComponent from "components/Sidebar";
import { getProjects, addProject, deleteProject } from "actions/projects";

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
  addProject: name => dispatch(addProject(name)),
  deleteProject: name => dispatch(deleteProject(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);
