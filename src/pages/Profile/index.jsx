import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Dashboard from "layouts/Dashboard";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200
    },
    minWidth: 275,
    marginRight: "auto",
    marginLeft: "auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Profile extends React.Component {
  state = {
    username: ``,
    email: ``
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  updateProfile = () => {};
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }
  render() {
    const { classes, user } = this.props;
    return (
      <Dashboard title="User Profile Section 使用者資料設定">
        <div className={classes.root}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                User Profile
              </Typography>

              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="displayName"
                  label="display name"
                  className={classes.textField}
                  value={user.username || ""}
                  onChange={this.handleChange("username")}
                  margin="normal"
                />

                <TextField
                  disabled
                  id="email"
                  label="email"
                  className={classes.textField}
                  value={this.state.email || ""}
                  onChange={this.handleChange("email")}
                  margin="normal"
                />
              </form>
            </CardContent>

            <CardActions>
              <Button
                onClick={this.updateProfile}
                variant="contained"
                size="small"
                color="primary"
              >
                Update
              </Button>
            </CardActions>
          </Card>
        </div>
      </Dashboard>
    );
  }
}

export default withStyles(styles)(Profile);
