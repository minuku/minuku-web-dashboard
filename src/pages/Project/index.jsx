import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactJson from "react-json-view";
import { userService } from "utils/userService";
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
    flexDirection: `column`
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
});

class Porfile extends React.Component {
  state = {
    data: []
  };

  downloadJSON = () => {
    const data = removeEmptyObjects(this.state.data);
    let blob = new Blob([JSON.stringify(data)], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "minuku-config.json");
  };
  componentDidMount() {
    userService.queryProfile().then(res => {
      this.setState({
        displayName: res.displayName
      });
    });
    let token = localStorage.getItem(`token`);
    fetch(`${url}/project/project1/situation/situation1?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(res => {
        this.setState({ data: res });
        console.log(res);
      });
  }
  render() {
    const { classes } = this.props;
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
                src={this.state.data}
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

export default withStyles(styles)(Porfile);
