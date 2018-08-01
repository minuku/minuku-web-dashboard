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
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch(success(res));
    })
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const addDatacollection = (data) => {
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
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "datacollectionName": data.title,
        "datacollectionType": data.dataCollectionCategory
      }),
      method: "POST",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res));
    })
    .then(() => dispatch(getDatacollections()) )
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const deleteDatacollection = (title) => {
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
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${title}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res));
    })
    .then(() => dispatch(getDatacollections()) )
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const getDevices = (name) => {
  const request = () => {
    return { type: "GET_DEVICES" };
  };
  const success = payload => {
    return { type: "GET_DEVICES_SUCCESS", payload };
  };

  const failure = error => {
    return { type: "GET_DEVICES_ERROR", error };
  };
  return dispatch => {
    dispatch(request());
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res.devices));
    })
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const addDevice = (name) => {
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
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}/device?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "deviceName": this.state.dataCollectionTitle,
        "deviceType": this.state.dataCollectionCategory,
        "deviceContent": []
      }),
      method: "POST",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res));
    })
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const deleteDevice = (CollectionName, deviceName) => {
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
    let token = localStorage.getItem(`token`)

    fetch(`${url}/project/project1/situation/situation1/datacollection/${CollectionName}/device/${deviceName}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res));
    })
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}

export const updateDevice = (CollectionName, deviceName, data) => {
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
    let token = localStorage.getItem(`token`)

    fetch(`${url}/project/project1/situation/situation1/datacollection/${CollectionName}/device/${deviceName}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "deviceContent": data
      }),
      method: "PUT",
    })
    .then(res => res.json())
    .then(res => {
      dispatch(success(res));
    })
    .catch(err => {
      console.log("error", err)
      dispatch(failure(err));
    })
  }
}
