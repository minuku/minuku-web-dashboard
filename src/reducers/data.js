const data = (state = [], action) => {
  switch (action.type) {
    case "GET_DATACOLLECTIONS":
      return {...state, ...action.payload}

    case "GET_DATACOLLECTIONS_SUCCESS":
      return {...action.payload}

    case "GET_DATACOLLECTIONS_ERROR":
      return state

    case "ADD_DATACOLLECTION":
      return state

    case "ADD_DATACOLLECTION_SUCCESS":
      return state

    case "ADD_DATACOLLECTION_ERROR":
      return state

    case "DELETE_DATACOLLECTION":
      return state

    case "DELETE_DATACOLLECTION_SUCCESS":
      return state

    case "DELETE_DATACOLLECTION_ERROR":
      return state

    default:
      return state
  }
}

export default data
