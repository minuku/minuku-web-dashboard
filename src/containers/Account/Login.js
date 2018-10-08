import { connect } from "react-redux";
import LoginComponent from "pages/Account/Login";
import { login } from "actions/account";

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export const Login = connect(
  () => ({}),
  mapDispatchToProps
)(LoginComponent);
