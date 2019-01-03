import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Dashboard from "layouts/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  iconButton: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  title: {
    fontSize: 14,
    marginBottom: 16
  }
});

const QuestionListItem = withRouter(
  ({
    classes,
    history,
    match,
    questionnaireName,
    questionnaireContent,
    deleteQuestionnaire
  }) => (
    <ListItem>
      <ListItemAvatar>
        <Avatar size="small">
          {questionnaireName.charAt(0).toUpperCase()}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={questionnaireName}
        secondary={`${questionnaireContent.length} questions.`}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Edit"
          className={classes.iconButton}
          onClick={() => history.push(`${match.url}/${questionnaireName}/edit`)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.iconButton}
          onClick={() =>
            deleteQuestionnaire(match.params.projectName, questionnaireName)
          }
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

class Questionnaire extends React.Component {
  componentDidMount() {
    const { getQuestionnaires, match } = this.props;
    getQuestionnaires(match.params.projectName);
  }
  render() {
    const {
      classes,
      questionnaires,
      deleteQuestionnaire,
      history,
      match
    } = this.props;
    return (
      <Dashboard title="Questionnaire Section 問卷設定">
        <div className="d-flex justify-content-center">
          <div className="col-6 mt-5">
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Questionnaires
                </Typography>
                <List component="div" disablePadding>
                  {questionnaires && questionnaires.length ? (
                    questionnaires.map(questionnaire => (
                      <QuestionListItem
                        key={questionnaire.questionnaireName}
                        classes={classes}
                        deleteQuestionnaire={deleteQuestionnaire}
                        {...questionnaire}
                      />
                    ))
                  ) : (
                    <div className="text-center">
                      No questionnaire created yet.
                    </div>
                  )}
                </List>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="Add"
                  className="float-right my-4"
                  onClick={() => history.push(`${match.url}/new`)}
                >
                  <AddIcon />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default withStyles(styles)(Questionnaire);
