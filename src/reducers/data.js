const data = (state = [], action) => {
  switch (action.type) {
    case "GET_DATACOLLECTIONS":
      return state;

    case "GET_DATACOLLECTIONS_SUCCESS":
      return state;

    case "GET_DATACOLLECTIONS_ERROR":
      return state;

    case "ADD_DATACOLLECTION":
      return state;

    case "ADD_DATACOLLECTION_SUCCESS":
      return state;

    case "ADD_DATACOLLECTION_ERROR":
      return state;

    case "DELETE_DATACOLLECTION":
      return state;

    case "DELETE_DATACOLLECTION_SUCCESS":
      delete state[action.payload];
      return {
        ...state
      };

    case "DELETE_DATACOLLECTION_ERROR":
      return state;

    case "GET_DEVICES":
      return state;

    case "GET_DEVICES_SUCCESS":
      return {
        ...state,
        [action.payload.collection]: {
          ...action.payload
        }
      };

    case "GET_DEVICES_ERROR":
      return state;

    case "ADD_DEVICE":
      return state;

    case "ADD_DEVICE_SUCCESS":
      return state;

    case "ADD_DEVICE_ERROR":
      return state;

    case "DELETE_DEVICE":
      return state;

    case "DELETE_DEVICE_SUCCESS":
      delete state[action.payload.collection];
      console.log("delete", state);
      return {
        ...state
      };

    case "DELETE_DEVICE_ERROR":
      return state;

    case "UPDATE_DEVICE":
      return state;

    case "UPDATE_DEVICE_SUCCESS":
      return state;

    case "UPDATE_DEVICE_ERROR":
      return state;

    default:
      return state;
  }
};

export default data;
