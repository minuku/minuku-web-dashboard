import { connect } from "react-redux";
import QuestionnaireEdit from "pages/Questionnaire/Edit";
import { getQuestionnaires, updateQuestionnaire } from "actions/questionnaire";

const mapStateToProps = ({ questionnaires }, { match }) => ({
  questionnaire: questionnaires.find(
    ({ questionnaireName }) =>
      questionnaireName === match.params.questionnaireName
  )
});

const mapDispatchToProps = dispatch => ({
  getQuestionnaires: (...args) => dispatch(getQuestionnaires(...args)),
  updateQuestionnaire: (...args) => dispatch(updateQuestionnaire(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireEdit);
