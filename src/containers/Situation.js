import { connect } from "react-redux";
import SituationComponent from "pages/Situation";
import {
  getSituations,
  addSituation,
  updateSituation,
  deleteSituation
} from "actions/situations";

import {
  addCondition,
  updateCondition,
  deleteCondition
} from "actions/condition";

const mapStateToProps = state => ({
  situations: state.situations
});

const mapDispatchToProps = dispatch => ({
  getSituations: (...args) => dispatch(getSituations(...args)),
  addSituation: (...args) => dispatch(addSituation(...args)),
  updateSituation: (...args) => dispatch(updateSituation(...args)),
  deleteSituation: (...args) => dispatch(deleteSituation(...args)),
  addCondition: (...args) => dispatch(addCondition(...args)),
  updateCondition: (...args) => dispatch(updateCondition(...args)),
  deleteCondition: (...args) => dispatch(deleteCondition(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SituationComponent);
