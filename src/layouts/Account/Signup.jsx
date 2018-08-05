import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const styles = theme => ({
  cardWrapper: {
    width: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: "100vh",
    position: "relative",
    padding: 20
  },
  card: {
    width: `100%`,
    maxWidth: 400,
    height: 250,
    padding: 15,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`
  },
  textField: {
    width: `100%`
  },
  pos: {
    marginTop: 12
  }
});

class SimpleCard extends React.Component {
  state = {
    account: ``,
    password: ``
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  userSignup = () => {
    this.props.register({
      account: this.state.account,
      password: this.state.password
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardWrapper}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Minuku Signup
            </Typography>
            <TextField
              required
              id="account"
              label="account"
              className={classes.textField}
              value={this.state.account}
              onChange={this.handleChange("account")}
            />
            <TextField
              required
              id="password"
              label="password"
              type="password"
              autoComplete="current-password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
            <Typography variant="caption" gutterBottom className={classes.pos}>
              <Link to="/login">click here to login.</Link>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.userSignup}
            >
              signup
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleCard);
