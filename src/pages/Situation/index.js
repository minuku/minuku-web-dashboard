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
  state = { openCreateSituationDialog: false };
  componentDidMount() {
    const { getSituations, match } = this.props;
    getSituations(match.params.projectName);
  }
  addSituation = situationName => {
    const { addSituation, match } = this.props;
    addSituation(match.params.projectName, { situationName });
  };
  deleteSituation = situationName => {
    const { deleteSituation, match } = this.props;
    deleteSituation(match.params.projectName, situationName);
  };
  render() {
    const { openCreateSituationDialog } = this.state;
    const { situations } = this.props;
    return (
      <Dashboard title="Situation Section 資料收集場合設定">
        <div className="d-flex justify-content-center">
          <div className="col-6 mt-5">
            <Card>
              <CardHeader title="Situations" />
              <CardContent>
                <Situations.List
                  situations={situations}
                  deleteSituation={this.deleteSituation}
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
          addSituation={this.addSituation}
          onClose={() => this.setState({ openCreateSituationDialog: false })}
        />
      </Dashboard>
    );
  }
}
export default withStyles(styles)(Situation);
