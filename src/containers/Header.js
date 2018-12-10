import { connect } from "react-redux";
import HeaderComponent from "components/Header";
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
)(HeaderComponent);
