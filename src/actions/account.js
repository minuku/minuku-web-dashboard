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
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

export const getUser = () => {
  const request = () => {
    return { type: "GET_USER_REQUEST" };
  };
  const success = payload => {
    return { type: "GET_USER_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "GET_USER_ERROR", error };
  };

  const token = localStorage.getItem("token");

  return dispatch => {
    dispatch(request());
    fetch(`${url}/profile?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        try {
          return resp.json();
        } catch (err) {}
        return resp.text();
      })
      .then(data => {
        dispatch(success(data));
      })
      .catch(err => {
        dispatch(failure(err));
        console.log(`err`, err);
      });
  };
};
