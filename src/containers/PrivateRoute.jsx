import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  state = {
    isLoading: true,
    isAuthed: false
  };

  static propTypes = {
    component: PropTypes.any.isRequired
  };

  checkAuth = async () => {
    let isAuthed = false;
    const { isLogin } = this.props;

    if (isLogin) {
      this.setState(state => ({ ...state, isLoading: true }));

      isAuthed = localStorage.getItem(`user`);
    }
    if (!isAuthed) {
      console.log(`not authed`);
    }

    this.setState(state => ({
      ...state,
      isAuthed: isAuthed,
      isLoading: false
    }));
  };

  componentWillMount = async () => {
    await this.checkAuth();
  };

  componentWillReceiveProps = async nextProps => {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      await this.checkAuth();
    }
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { isLoading, isAuthed } = this.state;
    return isLoading === true ? (
      <div>isloading...</div>
    ) : (
      <Route
        {...rest}
        render={props =>
          isAuthed ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: localStorage.getItem(`user`)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
