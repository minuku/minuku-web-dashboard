import { connect } from "react-redux";
import ProfileComponent from "pages/Profile";
import { getUser } from "actions/account";

const mapStateToProps = state => ({
  user: state.account
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
