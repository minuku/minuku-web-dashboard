import React from "react";

import Dashboard from "layouts/Dashboard";
import QuestionnaireComponent from "components/Questionnaire";

class Edit extends React.Component {
  componentDidMount() {
    const { getQuestionnaires, match } = this.props;
    getQuestionnaires(match.params.projectName);
  }
  render() {
    const { updateQuestionnaire, questionnaire, match } = this.props;
    return (
      <Dashboard title="Edit Questionnaire">
        <div className="d-flex justify-content-center">
          <div className="col-6 mt-5">
            <QuestionnaireComponent
              submit={data =>
                updateQuestionnaire(
                  match.params.projectName,
                  match.params.questionnaireName,
                  data
                )
              }
              data={questionnaire}
            />
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default Edit;
