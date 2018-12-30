import { connect } from "react-redux";
import DataComponent from "pages/Data/index";
import {
  getDatacollections,
  addDatacollection,
  deleteDatacollection,
  getDevices,
  addDevice,
  deleteDevice,
  updateDevice
} from "actions/data";

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  getDatacollections: (...args) => dispatch(getDatacollections(...args)),
  addDatacollection: (...args) => dispatch(addDatacollection(...args)),
  deleteDatacollection: (...args) => dispatch(deleteDatacollection(...args)),
  getDevices: (...args) => dispatch(getDevices(...args)),
  addDevice: (...args) => dispatch(addDevice(...args)),
  deleteDevice: (...args) => dispatch(deleteDevice(...args)),
  updateDevice: (...args) => dispatch(updateDevice(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
