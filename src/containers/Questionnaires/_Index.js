import { connect } from "react-redux";
import QuestionnaireIndex from "pages/Questionnaire/_Index";
import {
  getQuestionnaires,
  addQuestionnaire,
  updateQuestionnaire,
  deleteQuestionnaire
} from "actions/questionnaire";

const mapStateToProps = state => ({
  questionnaires: state.questionnaires
});

const mapDispatchToProps = dispatch => ({
  getQuestionnaires: (...args) => dispatch(getQuestionnaires(...args)),
  addQuestionnaire: (...args) => dispatch(addQuestionnaire(...args)),
  updateQuestionnaire: (...args) => dispatch(updateQuestionnaire(...args)),
  deleteQuestionnaire: (...args) => dispatch(deleteQuestionnaire(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireIndex);
