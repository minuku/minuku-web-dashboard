import React from "react";
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

  checkAuth = () => {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState(state => ({ ...state, isLoading: true }));
    } else {
      console.log(`not authed`);
    }

    this.setState({
      isAuthed: !!token,
      isLoading: false
    });
  };

  componentWillMount = () => {
    this.checkAuth();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.checkAuth();
    }
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthed } = this.state;
    return (
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

export default PrivateRoute;
