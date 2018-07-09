import { userService } from "utils/userService";
import { history } from "utils/history";
// let url = `https://minukutest.nctu.me/minukutest`;

export const login = user => {
  const request = user => {
    return { type: "LOGIN_REQUEST", user };
  };
  const success = payload => {
    return { type: "LOGIN_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "LOGIN_ERROR", error };
  };

  return dispatch => {
    dispatch(request(user));
    userService.login(user).then(
      user => {
        dispatch(success(user));
        history.push("/dashboard/");
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
};

export const register = user => {
  const request = user => {
    return { type: `REGISTER_REQUEST`, user };
  };
  const success = user => {
    return { type: `REGISTER_SUCCESS`, user };
  };
  const failure = error => {
    return { type: `REGISTER_ERROR`, error };
  };
  return dispatch => {
    dispatch(request(user));

    if (process.env.NODE_ENV === "production") {
      fetch(`https://minukutest.nctu.me/minukutest/signup`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: {
          account: "test@test.com",
          username: "armuro",
          password: "minuku",
          email: "test@test.com"
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else if (process.env.NODE_ENV === "development") {
      userService.register(user).then(
        user => {
          dispatch(success(user));
          history.push("/login");
          // dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error));
          // dispatch(alertActions.error(error))
        }
      );
    }
  };
};

export const logout = () => {
  // userService.logout()
  return { type: "LOGOUT" };
};
