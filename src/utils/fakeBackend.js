let users = JSON.parse(localStorage.getItem("users")) || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          // get parameters from post request
          let params = JSON.parse(opts.body);
          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return (
              user.account === params.account &&
              user.password === params.password
            );
          });

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              account: user.account,
              token: "QpwL5tke4Pnpja7X"
            };
            resolve({ ok: true, json: () => Promise.resolve(responseJson) });

          } else {
            // else return error
            reject("Username or password is incorrect, or not yet register");
          }
          return;
        }

        // get users
        if (url.endsWith("/users") && opts.method === "GET") {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer QpwL5tke4Pnpja7X"
          ) {
            resolve({ ok: true, json: () => Promise.resolve(users) });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }
          return;
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === "GET") {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer QpwL5tke4Pnpja7X') {
            // find user by id in users array
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1], 10);
            let matchedUsers = users.filter(user => {
              return user.id === id;
            });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            resolve({ ok: true, json: () => Promise.resolve(user)})
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised')
          }
          return
        }

        // update user by id
        if (url.match(/\/users\/\d+$/) && opts.method === 'POST') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer QpwL5tke4Pnpja7X') {
            // find user by id in users array
            let urlParts = url.split('/')
            let id = parseInt(urlParts[urlParts.length - 1], 10)
            let matchedUsers = users.filter(user => { return user.id === id; })
            let user = matchedUsers.length ? matchedUsers[0] : null

            user.displayName = JSON.parse(opts.body).displayName
            users[id] = user
            localStorage.setItem('users', JSON.stringify(users))

            // respond 200 OK with user
            resolve({ ok: true, json: () => Promise.resolve(user)})
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }
          return;
        }

        // register user
        if (url.endsWith("/users/register") && opts.method === "POST") {
          // get new user object from post body
          let newUser = JSON.parse(opts.body);

          // validation
          let duplicateUser = users.filter(user => {
            return user.account === newUser.account;
          }).length;
          if (duplicateUser) {
            reject('Username "' + newUser.account + '" is already taken');
            return;
          }

          // save new user
          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          // respond 200 OK
          resolve({ ok: true, json: () => Promise.resolve({}) });
          return;
        }

        // delete user
        if (url.match(/\/users\/\d+$/) && opts.method === "DELETE") {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            // find user by id in users array
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1], 10);
            for (let i = 0; i < users.length; i++) {
              let user = users[i];
              if (user.id === id) {
                // delete user
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                break;
              }
            }

            // respond 200 OK
            resolve({ ok: true, json: () => Promise.resolve({}) });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }
          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
