import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import yellow from "@material-ui/core/colors/yellow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import _ from "lodash";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TimeInput from "material-ui-time-picker";
import Rule from "components/Rule";

const styles = theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px"
  },
  timePick: {
    width: 82
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    "&:hover": {
      backgroundColor: purple[900]
    }
  }
});

const theme = createMuiTheme({
  palette: {
    secondary: yellow
  }
});
const defaultStart = new Date(2018, 11, 24, 10, 33, 30, 0);
const defaultEnd = new Date(2018, 11, 24, 12, 33, 30, 0);

// Menu Item
const hourInterval = Array(24)
  .fill()
  .map((value, index) => index + 1);
const minInterval = Array(60)
  .fill()
  .map((value, index) => index);
const timeUnit = ["hour", "minute", "second"];

class Condition extends React.Component {
  state = {
    conditionList: [
      {
        isOpen: false,
        name: "移動中",
        schedule_from: false,
        startTime: defaultStart,
        endTime: defaultEnd,
        schedule_last: false,
        duration: 10,
        unit: "minute",
        rule: [
          {
            name: "transportation",
            parameter: ["10", "km"]
          },
          {
            name: "accelerometer",
            parameter: ["National Chiao Tung University"]
          }
        ]
      },
      {
        isOpen: false,
        name: "騎腳踏中",
        schedule_from: false,
        startTime: defaultStart,
        endTime: defaultEnd,
        schedule_last: false,
        duration: 10,
        unit: "minute",
        rule: [
          {
            name: "gravity",
            parameter: ["30", "km"]
          }
        ]
      },
      {
        isOpen: false,
        name: "靜止中",
        schedule_from: false,
        startTime: defaultStart,
        endTime: defaultEnd,
        schedule_last: false,
        duration: 10,
        unit: "minute",
        rule: [
          {
            name: "gyroscope",
            parameter: [0, "km"]
          },
          {
            name: "light",
            parameter: []
          }
        ]
      }
    ]
  };

  handleEdit = index => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = true;
    this.setState({ conditionList: tmp });
  };

  handleDelete = index => {
    let tmp = this.state.conditionList;
    tmp.splice(index, 1);
    this.setState({ conditionList: tmp });
  };

  handleAdd = () => {
    let tmp = this.state.conditionList;
    tmp.push({
      isOpen: true,
      name: "New Condition",
      schedule_from: false,
      startTime: defaultStart,
      endTime: defaultEnd,
      schedule_last: false,
      duration: 10,
      unit: "minute",
      rule: []
    });
    this.setState({ conditionList: tmp });
  };

  handleClose = index => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = false;
    this.setState({ conditionList: tmp });
  };

  handleChange = ({ i, t }) => event => {
    let tmp = this.state.conditionList;
    tmp[i][t] = event.target.value;
    this.setState({ conditionList: tmp });
  };

  handleCheck = ({ i, t }) => event => {
    let tmp = this.state.conditionList;
    tmp[i][t] = event.target.checked;
    this.setState({ conditionList: tmp });
  };

  handleChangeRule = ({ i, ri, t }) => event => {
    let tmp = this.state.conditionList;
    tmp[i]["rule"][ri][t] = event.target.value;
    this.setState({ conditionList: tmp });
  };
  handleParChange = ({ index, ruleIndex, parIndex }) => event => {
    let tmp = this.state.conditionList;
    tmp[index]["rule"][ruleIndex]["parameter"][parIndex] = event.target.value;
    this.setState({ conditionList: tmp });
  };
  handleAddRule = index => {
    let tmp = this.state.conditionList;
    tmp[index].rule.push({
      name: "transportation",
      parameter: [0, "km"]
    });
    this.setState({ conditionList: tmp });
  };

  handleTimeChange = ({ time, index, mode }) => {
    let tmp = this.state.conditionList;
    tmp[index][mode] = time;
    this.setState({ conditionList: tmp });
  };

  handleCross = ({ index, ruleIndex }) => {
    let tmp = this.state.conditionList;
    tmp[index].rule.splice(ruleIndex, 1);
    this.setState({ conditionList: tmp });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Card className={classes.card}>
            <CardHeader title="Condition" />
            <CardContent>
              <List>
                {_.map(this.state.conditionList, (condition, index) => (
                  <ListItem divider disableGutters>
                    <ListItemText primary={condition.name} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={e => this.handleEdit(index)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={e => this.handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <Dialog open={condition.isOpen} className={classes.dialog}>
                      <DialogTitle>
                        <TextField
                          label="Name"
                          className={classes.textField}
                          value={condition.name}
                          onChange={this.handleChange({ i: index, t: "name" })}
                          margin="normal"
                        />
                      </DialogTitle>
                      <DialogContent>
                        <List>
                          <ListItem
                            role={undefined}
                            dense
                            className={classes.listItem}
                          >
                            <Checkbox
                              checked={condition.schedule_from}
                              onChange={this.handleCheck({
                                i: index,
                                t: "schedule_from"
                              })}
                            />
                            <ListItemText primary="From" />
                            <TimeInput
                              mode="12h"
                              onChange={time =>
                                this.handleTimeChange({
                                  time: time,
                                  index: index,
                                  mode: "startTime"
                                })
                              }
                              value={condition.startTime}
                              className={classes.timePick}
                            />
                            <ListItemText primary="to" />
                            <TimeInput
                              mode="12h"
                              onChange={time =>
                                this.handleTimeChange({
                                  time: time,
                                  index: index,
                                  mode: "endTime"
                                })
                              }
                              value={condition.endTime}
                              className={classes.timePick}
                            />
                          </ListItem>
                          <ListItem
                            role={undefined}
                            dense
                            className={classes.listItem}
                          >
                            <Checkbox
                              checked={condition.schedule_last}
                              onChange={this.handleCheck({
                                i: index,
                                t: "schedule_last"
                              })}
                            />
                            <ListItemText primary="Last for" />
                            <TextField
                              id="select-currency"
                              select
                              className={classes.textField}
                              value={condition.duration}
                              onChange={this.handleChange({
                                i: index,
                                t: "duration"
                              })}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              margin="normal"
                            >
                              {condition.unit === "hour"
                                ? hourInterval.map(option => (
                                    <MenuItem key={option} value={option}>
                                      {option}
                                    </MenuItem>
                                  ))
                                : minInterval.map(option => (
                                    <MenuItem key={option} value={option}>
                                      {option}
                                    </MenuItem>
                                  ))}
                            </TextField>
                            <ListItemText primary=" " />
                            <TextField
                              select
                              className={classes.textField}
                              value={condition.unit}
                              onChange={this.handleChange({
                                i: index,
                                t: "unit"
                              })}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              margin="normal"
                            >
                              {timeUnit.map(option => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                            </TextField>
                          </ListItem>
                          <ListItem divider={true}>
                            <Typography variant="subheading">Rule</Typography>
                          </ListItem>
                          {_.map(condition.rule, (ruleObj, ruleIndex) => (
                            <ListItem>
                              <Rule
                                ruleObj={ruleObj}
                                handleChangeRule={() =>
                                  this.handleChangeRule({
                                    i: index,
                                    ri: ruleIndex,
                                    t: "name"
                                  })
                                }
                                handleCross={() =>
                                  this.handleCross({ index, ruleIndex })
                                }
                              />
                            </ListItem>
                          ))}
                          <ListItem>
                            <Button
                              variant="contained"
                              color="secondary"
                              aria-owns={
                                this.state.anchorEl ? "simple-menu" : null
                              }
                              aria-haspopup="true"
                              onClick={() => this.handleAddRule(index)}
                            >
                              + rule
                            </Button>
                          </ListItem>
                        </List>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={e => this.handleClose(index)}
                          color="primary"
                        >
                          cancel
                        </Button>
                        <Button
                          onClick={e => this.handleClose(index)}
                          color="primary"
                          autoFocus
                        >
                          done
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.margin}
                onClick={this.handleAdd}
              >
                + ADD
              </Button>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

Condition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Condition);
