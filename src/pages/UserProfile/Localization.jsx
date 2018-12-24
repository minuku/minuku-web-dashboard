import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
  content: {
    position: "absolute",
    left: "15%",
    top: "300%",
    width: "60%",
    height: "100vh",
    padding: "10%"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 500
  }
});

class Localization extends React.Component {
  state = {
    region: "",
    time: "",
    language: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content} id="localization">
        <h1>Localization</h1>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="regionDefine">Choose your region</InputLabel>
          <Select
            value={this.state.region}
            onChange={this.handleChange}
            inputProps={{
              name: "region",
              id: "regionDefine"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={`Taiwan`}>Taiwan</MenuItem>
            <MenuItem value={`Australia`}>Australia</MenuItem>
            <MenuItem value={`Britan`}>Britan</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="regionDefine">Choose your time zone</InputLabel>
          <Select
            value={this.state.time}
            onChange={this.handleChange}
            inputProps={{
              name: "time",
              id: "regionDefine"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={`GMT0`}>GMT0</MenuItem>
            <MenuItem value={`GMT1`}>GMT1</MenuItem>
            <MenuItem value={`GMT2`}>GMT2</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="regionDefine">Choose your language</InputLabel>
          <Select
            value={this.state.language}
            onChange={this.handleChange}
            inputProps={{
              name: "language",
              id: "regionDefine"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={`English`}>English</MenuItem>
            <MenuItem value={`Chinese`}>Chinese</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Localization);
