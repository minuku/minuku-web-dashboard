import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Rule from "components/Rule";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  dialog: {
    width: `100%`,
  },
  listItemGroup: {
    width: "760px"
  },
  listItemText: {
    textAlign: `left`,
    width: `auto`
  },
  TimeLabelGroup: {
    display: `flex`,
    alignItems: `center`,
    marginRight: 50
  }
});

// Menu Item
const hourInterval = Array(24)
  .fill()
  .map((value, index) => index + 1);
const minInterval = Array(60)
  .fill()
  .map((value, index) => index);
const timeUnit = ["hour", "minute", "second"];




class ConditionDialog extends React.Component {
  state = {
    value: {},
    nameError: false,
    startTimeError: false,
    endTimeError: false,
    durationError: false,
    unitError: false,
    nameRepeat: false
  };

  componentDidUpdate(prevProps) {
    const { value } = this.props
    if(value !== prevProps.value && value){
      this.setState({
        value: {
          name: value.conditionName,
          ...value.conditionContent
        },
        nameError: false,
        startTimeError: false,
        endTimeError: false,
        durationError: false,
        unitError: false,
        nameRepeat: false
      })
    }
  }

  /* Event Handle Function */
  handleChange = type => event => {
    const { value } = this.state
    this.setState({ value:  {  ...value, [type]: event.target.value } });
  };

  handleCheck = type => event => {
    const { value } = this.state
    this.setState({ value: { ...value, [type]: event.target.checked } });
  };

  handleTimeChange = ({ event, mode }) => {
    event.persist();
    const { value } = this.state
    this.setState({ value: { ...value, [mode]: event.target.value } });
  };

  handleChangeRule = (ruleIndex, e) => {
    const { value } = this.state
    let tmp = _.cloneDeep(value);
    tmp["rule"][ruleIndex]["name"] = e.target.value;
    this.setState({ value: tmp });
  };
  handleChangeRuleParameter = (ruleIndex, e) => {
    const { value } = this.state
    let tmp = _.cloneDeep(value);
    tmp["rule"][ruleIndex]["parameter"] = e.target.value;
    this.setState({ value: tmp });
  };

  handleCross = index => {
    const { value } = this.state
    this.setState({ value: { ...value.slice(0, index), ...value.slice(index+1) } });
  };

  handleAddRule = () => {
    const { value } = this.state
    const { rule = {} } = value
    const newRule = {
      name: "transportation",
      parameter: ["on foot"]
    }
    this.setState({
      value: {
        ...value,
        rule: [ ...rule, newRule ]
      }
    });
  };

  handleParaChange = (id, ruleId, v) => {
    const { value } = this.state
    let tmp = _.cloneDeep(value);
    tmp["rule"][ruleId]["parameter"][id] = v;
    this.setState({ value: tmp });
  };

  handleSave = () => {
    const { value } = this.state
    const { handleSave } = this.props
    const errors = []

    // if condition name is empty, reject save event and send an error message
    this.setState({ nameError: !value.name });
    errors.push(!value.name)

    // if check box 'schedule_from' is checked, but the input is empty string, reject save event and send an error message
    if (value.schedule_from) {
      this.setState({ startTimeError: !value.startTime });
      this.setState({ endTimeError: !value.endTime });
      errors.push(!value.startTime, !value.endTime)
    }

    // if check box 'schedule_last' is checked, but the input is empty string, reject save event and send an error message
    if (value.schedule_last) {
      this.setState({ durationError: !value.duration });
      this.setState({ unitError: !value.unit });
      errors.push(!value.duration, !value.unit)
    }
    //No error, save the condition
    if (errors.includes(true)) return null;
    handleSave(value);
  };

  handleCancel = () => {
    const { handleCancel } = this.props
    this.setState({
      nameError: false,
      startTimeError: false,
      endTimeError: false,
      durationError: false,
      unitError: false,
      nameRepeat: false
    });
    handleCancel();
  };

  render() {
    const { classes, isOpen } = this.props;
    const {
      nameError,
      startTimeError,
      endTimeError,
      durationError,
      unitError,
      nameRepeat,
      value
    } = this.state

    if(!value)return null

    return (
      <div>
        <Dialog
          open={isOpen}
          className={classes.dialog}
          maxWidth={`md`}
        >
          <DialogTitle>
            <TextField
              error={nameError || nameRepeat}
              label={"Name"}
              helperText={
                nameError
                  ? "Please enter a name"
                  : nameRepeat
                    ? "The name has been used"
                    : ""
              }
              className={classes.textField}
              value={value.name || ''}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </DialogTitle>
          <DialogContent>
            <List disablePadding classesName={classes.listItemGroup}>
              <ListItem className={classes.listItem} disableGutters>
                <Checkbox
                  checked={value.schedule_from}
                  onChange={this.handleCheck("schedule_from")}
                />
                <div className={classes.TimeLabelGroup}>
                  <ListItemText
                    primary="From"
                    className={classes.listItemText}
                  />
                  <TextField
                    type="time"
                    disabled={!value.schedule_from}
                    error={startTimeError}
                    helperText={
                      startTimeError ? "Shouldn't be empty" : ""
                    }
                    onChange={e =>
                      this.handleTimeChange({ event: e, mode: "startTime" })
                    }
                    value={value.startTime || ''}
                    className={classes.timePick}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 60 // 1 min
                    }}
                  />
                  <ListItemText primary="to" className={classes.listItemText} />
                  <TextField
                    type="time"
                    disabled={!value.schedule_from}
                    error={endTimeError}
                    helperText={
                      endTimeError ? "Shouldn't be empty" : ""
                    }
                    onChange={e =>
                      this.handleTimeChange({ event: e, mode: "endTime" })
                    }
                    value={value.endTime || ''}
                    className={classes.timePick}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 60 // 1 min
                    }}
                  />
                </div>
              </ListItem>
              <ListItem disableGutters className={classes.listItem}>
                <Checkbox
                  checked={value.schedule_last}
                  onChange={this.handleCheck("schedule_last")}
                />
                <div className={classes.TimeLabelGroup}>
                  <ListItemText
                    primary="Last for"
                    className={classes.listItemText}
                  />
                  <TextField
                    id="select-currency"
                    disabled={!value.schedule_last}
                    error={durationError}
                    helperText={
                      durationError ? "Shouldn't be empty" : ""
                    }
                    select
                    className={classes.textField}
                    value={value.duration || ''}
                    onChange={this.handleChange("duration")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    margin="normal"
                  >
                    {
                      (value.unit === "hour" ? hourInterval : minInterval)
                        .map(option => (
                          <MenuItem key={option} value={option || ''}>
                            {option}
                          </MenuItem>
                        )
                      )
                    }
                  </TextField>
                  <ListItemText primary=" " className={classes.listItemText} />
                  <TextField
                    select
                    disabled={!value.schedule_last}
                    error={unitError}
                    helperText={unitError ? "Shouldn't be empty" : ""}
                    className={classes.textField}
                    value={value.unit || ''}
                    onChange={this.handleChange("unit")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    margin="normal"
                  >
                    {timeUnit.map(option => (
                      <MenuItem key={option} value={option || ''}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </ListItem>
              <ListItem divider={true}>
                <Typography variant="subheading">Rule</Typography>
              </ListItem>
              {
                value.rule && value.rule.length
                ? value.rule.map((rule, index) => (
                    <ListItem disableGutters key={index}>
                      <Rule
                        ruleObj={rule}
                        ruleIndex={index}
                        handleChangeRule={this.handleChangeRule}
                        handleCross={() => this.handleCross(index)}
                        handleParaChange={this.handleParaChange}
                        handleChangeRuleParameter={this.handleChangeRuleParameter}
                      />
                    </ListItem>
                  ))
                : null
              }
              <ListItem disableGutters>
                <Button
                  variant="contained"
                  color="secondary"
                  aria-haspopup="true"
                  onClick={this.handleAddRule}
                >
                  + rule
                </Button>
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCancel}
              color="primary"
            >
              cancel
            </Button>
            <Button
              onClick={this.handleSave}
              color="primary"
              autoFocus
            >
              save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ConditionDialog);
