import { connect } from "react-redux";
import SignupComponent from "pages/Account/Signup";
import { register } from "actions/account";

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user))
});

export const Signup = connect(
  () => ({}),
  mapDispatchToProps
)(SignupComponent);
