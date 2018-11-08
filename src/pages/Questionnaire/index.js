import React from "react";
import { withStyles } from "@material-ui/core/styles";


import Dashboard from "layouts/Dashboard";
import QuestionnaireComponent from 'components/Questionnaire'

const styles = () => ({
});

const Questionnaire = () => (
  <Dashboard  title="Questionnaire Section 問卷設定">
    <div className="d-flex justify-content-center">
      <div className="col-6 mt-5">
        <QuestionnaireComponent />
      </div>
    </div>
  </Dashboard>
);
export default withStyles(styles)(Questionnaire);
