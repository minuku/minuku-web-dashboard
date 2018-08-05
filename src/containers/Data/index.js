import { connect } from "react-redux";
import DataComponent from "layouts/Data/index.jsx";
import { getDatacollections, addDatacollection, deleteDatacollection, getDevices, addDevice, deleteDevice, updateDevice } from "actions/data";

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  getDatacollections: () => dispatch(getDatacollections()),
  addDatacollection: (data) => dispatch(addDatacollection(data)),
  deleteDatacollection: (data) => dispatch(deleteDatacollection(data)),
  getDevices: (name) => dispatch(getDevices(name)),
  addDevice: (name, info) => dispatch(addDevice(name, info)),
  deleteDevice: (name, deviceName) => dispatch(deleteDevice(name, deviceName)),
  updateDevice: (collectionName, deviceName, data) => dispatch(updateDevice(collectionName, deviceName, data))
});

export const Data = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
