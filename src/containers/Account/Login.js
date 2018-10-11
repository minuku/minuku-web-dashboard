import { connect } from "react-redux";
import LoginComponent from "pages/Account/Login";
import { login } from "actions/account";

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(LoginComponent);
