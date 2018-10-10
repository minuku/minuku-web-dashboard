let url = `https://minukutest.nctu.me/minukutest`;

export const getDatacollections = () => {
  const request = () => {
    return { type: "GET_DATACOLLECTIONS" };
  };
  const success = payload => {
    return { type: "GET_DATACOLLECTIONS_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "GET_DATACOLLECTIONS_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/project1/situation/situation1/datacollection?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(collections => {
        console.log(`collections ->`, collections);
        for (let i in collections) {
          dispatch(getDevices(collections[i]));
        }
        dispatch(success(collections));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const addDatacollection = data => {
  const request = () => {
    return { type: "ADD_DATACOLLECTION" };
  };
  const success = payload => {
    return { type: "ADD_DATACOLLECTION_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "ADD_DATACOLLECTION_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/project1/situation/situation1/datacollection?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          datacollectionName: data.title,
          datacollectionType: data.dataCollectionCategory
        }),
        method: "POST"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(success(res));
      })
      .then(() => dispatch(getDatacollections()))
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const deleteDatacollection = title => {
  const request = () => {
    return { type: "DELETE_DATACOLLECTION" };
  };
  const success = payload => {
    return { type: "DELETE_DATACOLLECTION_SUCCESS", payload };
  };

  const failure = error => {
    return { type: "DELETE_DATACOLLECTION_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/project1/situation/situation1/datacollection/${title}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(success(title));
      })
      .then(() => dispatch(getDatacollections()))
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const getDevices = name => {
  const request = () => {
    return { type: "GET_DEVICES" };
  };
  const success = obj => {
    return { type: "GET_DEVICES_SUCCESS", payload: obj };
  };
  const failure = error => {
    return { type: "GET_DEVICES_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/project1/situation/situation1/datacollection/${name}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(res => {
        let obj = { collection: name, devices: res.devices };
        dispatch(success(obj));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const addDevice = (name, info) => {
  const request = () => {
    return { type: "ADD_DEVICE" };
  };
  const success = payload => {
    return { type: "ADD_DEVICE_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "ADD_DEVICE_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/project1/situation/situation1/datacollection/${name}/device?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          deviceName: info.title,
          deviceType: info.category,
          deviceContent: []
        }),
        method: "POST"
      }
    )
      .then(res => res.json())
      .then(res => dispatch(success(res)))
      .then(() => dispatch(getDatacollections()))
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const deleteDevice = (collectionName, deviceName) => {
  const request = () => {
    return { type: "DELETE_DEVICE" };
  };
  const success = payload => {
    return { type: "DELETE_DEVICE_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "DELETE_DEVICE_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);

    fetch(
      `${url}/project/project1/situation/situation1/datacollection/${collectionName}/device/${deviceName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(success(res));
      })
      .then(() => dispatch(getDevices(collectionName)))
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};

export const updateDevice = (collectionName, deviceName, data) => {
  const request = () => {
    return { type: "UPDATE_DEVICE" };
  };
  const success = payload => {
    return { type: "UPDATE_DEVICE_SUCCESS", payload };
  };
  const failure = error => {
    return { type: "UPDATE_DEVICE_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`);

    fetch(
      `${url}/project/project1/situation/situation1/datacollection/${collectionName}/device/${deviceName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          deviceContent: data
        }),
        method: "PUT"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(success(res));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(failure(err));
      });
  };
};
