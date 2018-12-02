import { connect } from "react-redux";
import SidebarComponent from "components/Sidebar";
import { getProjects } from "actions/projects";

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  getProjects: (...args) => dispatch(getProjects(args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);
