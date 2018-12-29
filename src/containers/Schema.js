import { connect } from "react-redux";
import SchemaComponent from "pages/Schema";
import { getSituations } from "actions/situations";

const mapStateToProps = (state) => ({
  data: state.situations
});

const mapDispatchToProps = dispatch => ({
  getData: (...args) => dispatch(getSituations(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchemaComponent);
