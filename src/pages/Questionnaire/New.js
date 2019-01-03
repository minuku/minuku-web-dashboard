import React from "react";

import Dashboard from "layouts/Dashboard";
import QuestionnaireComponent from "components/Questionnaire";

const New = ({ addQuestionnaire, match }) => (
  <Dashboard title="New Questionnaire">
    <div className="d-flex justify-content-center">
      <div className="col-6 mt-5">
        <QuestionnaireComponent
          submit={data => addQuestionnaire(match.params.projectName, data)}
          isNew={true}
        />
      </div>
    </div>
  </Dashboard>
);

export default New;
