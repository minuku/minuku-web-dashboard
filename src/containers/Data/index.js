import { connect } from "react-redux";
import DataComponent from "layouts/Data/index.jsx";
import { getDatacollections, addDatacollection, deleteDatacollection } from "actions/data";

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  getDatacollections: () => dispatch(getDatacollections()),
  addDatacollection: (data) => dispatch(addDatacollection(data)),
  deleteDatacollection: (data) => dispatch(deleteDatacollection(data))
});

export const Data = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
