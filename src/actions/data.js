import { setSnackbar } from "./snackbar";

let url = `https://minukutest.nctu.me/minukutest`;

export const getDatacollections = projectName => {
  const success = payload => {
    return { type: "GET_DATACOLLECTIONS_SUCCESS", payload };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Loading Data Collections..." }));
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(collections => {
        for (let i in collections) {
          dispatch(getDevices(projectName, collections[i]));
        }
        dispatch(success(collections));
        dispatch(
          setSnackbar({ message: "Data Collections loaded successfully!" })
        );
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const addDatacollection = (projectName, data) => {
  const success = payload => {
    return { type: "ADD_DATACOLLECTION_SUCCESS", payload };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Creating Data Collections..." }));
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/${projectName}/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        datacollectionName: data.title,
        datacollectionType: data.dataCollectionCategory
      }),
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(success(res));
        dispatch(getDatacollections(projectName));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const deleteDatacollection = (projectName, title) => {
  const success = payload => {
    return { type: "DELETE_DATACOLLECTION_SUCCESS", payload };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Deleting Data Collections..." }));
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/${projectName}/datacollection/${title}?token=${token}`,
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
        dispatch(getDatacollections(projectName));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const getDevices = (projectName, collectionName) => {
  const success = obj => {
    return { type: "GET_DEVICES_SUCCESS", payload: obj };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Loading Devices..." }));
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/${projectName}/datacollection/${collectionName}?token=${token}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(res => {
        let obj = { collection: collectionName, devices: res.devices };
        dispatch(success(obj));
        dispatch(setSnackbar({ message: "Devices loaded successfully!" }));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const addDevice = (projectName, collectionName, info) => {
  const success = payload => {
    return { type: "ADD_DEVICE_SUCCESS", payload };
  };
  return dispatch => {
    dispatch(setSnackbar({ message: "Creating Devices..." }));
    let token = localStorage.getItem(`token`);
    fetch(
      `${url}/project/${projectName}/datacollection/${collectionName}/device?token=${token}`,
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
      .then(res => {
        dispatch(success(res));
        dispatch(getDatacollections(projectName));
        dispatch(setSnackbar({ message: "Devices created successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const deleteDevice = (projectName, collectionName, deviceName) => {
  const success = payload => {
    return { type: "DELETE_DEVICE_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);

    dispatch(setSnackbar({ message: "Deleting Devices..." }));
    fetch(
      `${url}/project/${projectName}/datacollection/${collectionName}/device/${deviceName}?token=${token}`,
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
        dispatch(getDevices(projectName, collectionName));
        dispatch(setSnackbar({ message: "Devices Deleted successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};

export const updateDevice = (projectName, collectionName, deviceName, data) => {
  const success = payload => {
    return { type: "UPDATE_DEVICE_SUCCESS", payload };
  };
  return dispatch => {
    let token = localStorage.getItem(`token`);
    dispatch(setSnackbar({ message: "Updating Devices..." }));

    fetch(
      `${url}/project/${projectName}/datacollection/${collectionName}/device/${deviceName}?token=${token}`,
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
        dispatch(setSnackbar({ message: "Devices Updated successfully!" }));
      })
      .catch(err => {
        dispatch(setSnackbar({ message: err.toString() }));
      });
  };
};
