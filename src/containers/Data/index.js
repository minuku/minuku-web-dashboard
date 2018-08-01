import { connect } from "react-redux";
import DataComponent from "layouts/Data/index.jsx";
import { getDatacollections, addDatacollection, deleteDatacollection, getDevices } from "actions/data";

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  getDatacollections: () => dispatch(getDatacollections()),
  addDatacollection: (data) => dispatch(addDatacollection(data)),
  deleteDatacollection: (data) => dispatch(deleteDatacollection(data)),
  getDevices: (name) => dispatch(getDevices(name)),
});

export const Data = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
