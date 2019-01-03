import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  body: {
    minWidth: 500,
    overflow: `scroll`,
    display: `flex`,
    flexDirection: `column`,
    [theme.breakpoints.down("sm")]: {
      minWidth: 300
    }
  },
  title: {
    fontSize: 14
  },
  questions: {
    minHeight: "50vh"
  }
});

const Body = ({
  classes,
  children,
  title,
  setName,
  submit,
  history,
  isNew
}) => (
  <Card className={classes.body}>
    <CardContent style={{ flex: 1 }}>
      <Typography className={classes.title} color="textSecondary">
        Questionnaire setting
      </Typography>
      <TextField
        required
        label="Title"
        defaultValue=""
        value={title}
        onChange={setName}
      />
      <div className={classes.questions}>{children}</div>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {
          submit();
          history.goBack();
        }}
      >
        {isNew ? "save" : "update"}
      </Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
    </CardActions>
  </Card>
);

export default withRouter(withStyles(styles)(Body));
