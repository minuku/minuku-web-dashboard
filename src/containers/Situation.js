import { connect } from "react-redux";
import SituationComponent from "pages/Situation";
import {
  getSituations,
  addSituation,
  deleteSituation
} from "actions/situations";

const mapStateToProps = (state, { match }) => ({
  situations: state.situations[match.params.projectName]
});

const mapDispatchToProps = dispatch => ({
  getSituations: (...args) => dispatch(getSituations(...args)),
  addSituation: (...args) => dispatch(addSituation(...args)),
  deleteSituation: (...args) => dispatch(deleteSituation(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SituationComponent);
