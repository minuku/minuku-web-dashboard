import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Dashboard from "layouts/Dashboard";

const styles = () => ({
  card: {
    width: `100%`,
    height: `100%`,
    minWidth: 275,
    maxWidth: 600,
    maxHeight: 600,
    overflow: `scroll`,
    position: "absolute",
    marginTop: "50px",
    left: "50%",
    transform: "translateX(-50%)",

    display: `flex`,
    flexDirection: `column`
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
});

const Questionnaire = ({ classes }) => (
  <Dashboard  title="Questionnaire Section 問卷設定">
    <Card className={classes.card}>
      <CardContent style={{ flex: 1 }}>
        <Typography className={classes.title} color="textSecondary">
          Questionnaire setting
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button
          onClick={() => this.downloadJSON()}
          variant="contained"
          size="small"
          color="primary"
        >
          update
        </Button>
      </CardActions>
    </Card>
  </Dashboard>
);
export default withStyles(styles)(Questionnaire);
