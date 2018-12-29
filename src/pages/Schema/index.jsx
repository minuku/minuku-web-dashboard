import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactJson from "react-json-view";
import saveAs from "file-saver";

import Dashboard from "layouts/Dashboard";

import removeEmptyObjects from "utils/removeEmptyObjects";

let url = `https://minukutest.nctu.me/minukutest`;

const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
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
    flexDirection: `column`,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 300,
      transform: "translateX(-40%)"
    }
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
});

class Schema extends React.Component {
  downloadJSON = () => {
    const { data } = this.props;
    const cookedData = removeEmptyObjects(data);
    let blob = new Blob([JSON.stringify(cookedData)], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "minuku-config.json");
  };
  componentDidMount() {
    const { match, getData } = this.props;
    getData(match.params.projectName);
  }
  render() {
    const { classes, data } = this.props;
    return (
      <Dashboard title="Project Section 專案列表">
        <div className={classes.root}>
          <Card className={classes.card}>
            <CardContent style={{ flex: 1 }}>
              <Typography className={classes.title} color="textSecondary">
                Project schema
              </Typography>
              <ReactJson
                collapsed={true}
                style={{ maxHeight: 450, overflow: `scroll` }}
                src={data}
              />
            </CardContent>

            <CardActions>
              <Button
                onClick={() => this.downloadJSON()}
                variant="contained"
                size="small"
                color="primary"
              >
                download
              </Button>
            </CardActions>
          </Card>
        </div>
      </Dashboard>
    );
  }
}

export default withStyles(styles)(Schema);
