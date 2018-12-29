import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "layouts/Dashboard";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import * as Situations from 'components/Situations';

const styles = theme => ({});

class Situation extends React.Component {
  state = { openCreateSituationDialog: false, editingSituation: null };
  componentDidMount() {
    const { getSituations, match } = this.props;
    getSituations(match.params.projectName);
  }

  editSituation = situationName => {
    this.setState({ openCreateSituationDialog: true, editingSituation: situationName })
  }

  addSituation = situationName => {
    const { addSituation, match } = this.props
    addSituation(match.params.projectName, { situationName })
  }

  updateSituation = newSituationName => {
    const { editingSituation } = this.state
    const { updateSituation, match } = this.props
    console.log(newSituationName)
    updateSituation(match.params.projectName, editingSituation, { newSituationName })
  }


  render() {
    const { openCreateSituationDialog, editingSituation } = this.state;
    const { deleteSituation, addSituation, situations, addCondition, updateCondition, deleteCondition, match } = this.props;
    return (
      <Dashboard title="Situation Section 資料收集場合設定">
        <div className="d-flex justify-content-center">
          <div className="col-6 mt-5">
            <Card>
              <CardHeader title="Situations" />
              <CardContent>
                <Situations.List
                  situations={situations}
                  deleteSituation={deleteSituation}
                  editSituation={this.editSituation}
                  addCondition={addCondition}
                  updateCondition={updateCondition}
                  deleteCondition={deleteCondition}
                  projectName={match.params.projectName}
                />
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="Add"
                  className="float-right my-4"
                  onClick={() =>
                    this.setState({ openCreateSituationDialog: true })
                  }
                >
                  <AddIcon />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Situations.EditDialog
          open={openCreateSituationDialog}
          onClose={() => this.setState({ openCreateSituationDialog: false })}
          onSubmit={editingSituation ? this.updateSituation : this.addSituation}
          name={editingSituation}
        />
      </Dashboard>
    );
  }
}
export default withStyles(styles)(Situation);
