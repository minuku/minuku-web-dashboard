import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const styles = (theme) => ({
  body: {
    minWidth: 500,
    overflow: `scroll`,
    display: `flex`,
    flexDirection: `column`,
    [theme.breakpoints.down("sm")]: {
      minWidth: 300
    },
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  questions: {
    minHeight: "50vh"
  }
});

const Body = ({ classes, children }) => (
  <Card className={classes.body}>
    <CardContent style={{ flex: 1 }}>
      <Typography className={classes.title} color="textSecondary">
        Questionnaire setting
      </Typography>
      <div className={classes.questions}>{children}</div>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small" color="primary">
        update
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Body);
