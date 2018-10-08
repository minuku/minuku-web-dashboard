// import { userService } from "utils/userService";
import { history } from "utils/history";
let url = `https://minukutest.nctu.me/minukutest`;

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
    fetch(`${url}/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        account: user.account,
        password: user.password
      })
    })
      .then(resp => {
        try {
          return resp.json();
        } catch (err) {}
        return resp.text();
      })
      .then(data => {
        dispatch(success(user));
        localStorage.setItem("token", data.access_token);
        history.push("/dashboard/");
      })
      .catch(err => {
        dispatch(failure(err));
        console.log(`err`, err);
      });
    // userService.login(user).then(
    //   user => {
    //     dispatch(success(user));
    //     history.push("/dashboard/");
    //   },
    //   error => {
    //     dispatch(failure(error));
    //   }
    // );
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

    fetch(`${url}/signup`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        account: user.account,
        username: ``,
        password: user.password
      })
    })
      .then(resp => {
        try {
          return resp.json();
        } catch (err) {}
        return resp.text();
      })
      .then(data => {
        dispatch(success(user));
        history.push("/login");
      })
      .catch(err => {
        console.log(err);
        dispatch(failure(err));
      });
    // userService.register(user).then(
    //   user => {
    //     dispatch(success(user));
    //     history.push("/login");
    //     // dispatch(alertActions.success('Registration successful'));
    //   },
    //   error => {
    //     dispatch(failure(error));
    //     // dispatch(alertActions.error(error))
    //   }
    // );
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
