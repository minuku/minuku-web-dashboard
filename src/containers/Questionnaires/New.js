import { connect } from "react-redux";
import QuestionnaireNew from "pages/Questionnaire/New";
import { addQuestionnaire } from "actions/questionnaire";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addQuestionnaire: (...args) => dispatch(addQuestionnaire(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireNew);
