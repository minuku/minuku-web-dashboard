import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Rule from 'components/Rule'
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  dialog: {
    width: `100%`,
  },
  listItemGroup: {
    width: '760px',
  },
  listItemText: {
    textAlign: `left`,
    width: `auto`
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  TimeLabelGroup: {
    display: `flex`,
    alignItems: `center`,
    marginRight: 50
  },
  
});

// Menu Item
const hourInterval = Array(24).fill().map((value, index) => index + 1);
const minInterval = Array(60).fill().map((value, index) => index);
const timeUnit = ['hour', 'minute', 'second'];

class ConditionDialog extends React.Component{
  
  // Every time when open the dialog, this function will be called.
  componentWillReceiveProps(nextProps) {
    let tmpConObj = _.cloneDeep(nextProps.conObj);
    let tmpConIndex = nextProps.conIndex;
    this.setState(
      {
        conObj: tmpConObj,
        conIndex: tmpConIndex,
      }
    );
  }

  state={
    conObj: {},
    conIndex: -1,
    nameError: false,
    startTimeError: false,
    endTimeError: false,
    durationError: false,
    unitError: false,
  }

  /* Event Handle Function */
  handleChange = (type) => event => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp[type] = event.target.value;
    this.setState({conObj: tmp});
  };

  handleCheck = (type) => event => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp[type] = event.target.checked;
    this.setState({conObj: tmp});
  };

  handleTimeChange = ({event, mode}) => {
    event.persist();
    let tmp = _.cloneDeep(this.state.conObj);
    tmp[mode] = event.target.value;
    this.setState({conObj: tmp});
  }

  handleChangeRule = (ruleIndex, e) => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp['rule'][ruleIndex]['name'] = e.target.value;
    this.setState({conObj: tmp});
  }

  handleCross = (ruleIndex) => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp.rule.splice(ruleIndex, 1);
    this.setState({conObj: tmp});
  }

  handleAddRule = (index) => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp.rule.push({
      name: "transportation",
      parameter: ['on foot'],
    });
    this.setState({conObj: tmp});
  };

  handleParaChange = (id, ruleId, value) => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp['rule'][ruleId]['parameter'][id] = value;
    this.setState({conObj: tmp});
  }

  handleSave = (conIndex, conObj) => {
    let hasError = false;
    if(conObj.name){    // if condition name is empty, reject save event and send an error message
      this.setState({nameError: false});
    } else {
      this.setState({nameError: true});
      hasError = true;
    }

    // if check box 'schedule_from' is checked, but the input is empty string, reject save event and send an error message
    if(conObj.schedule_from){
      if(!conObj.startTime){
        this.setState({startTimeError: true});
        hasError = true;
        //console.log('startTime error');
      } else {
        this.setState({startTimeError: false});
      }
      if(!conObj.endTime){
        this.setState({endTimeError: true});
        hasError = true;
        //console.log('endTime error');
      } else {
        this.setState({endTimeError: false});
      }
    }

    // if check box 'schedule_last' is checked, but the input is empty string, reject save event and send an error message
    if(conObj.schedule_last){
      if(!conObj.duration){
        this.setState({durationError: true});
        hasError = true;
        //console.log('duration error');
      } else {
        this.setState({durationError: false});
      }
      if(!conObj.unit){
        this.setState({unitError: true});
        hasError = true;
        //console.log('unit error');
      } else {
        this.setState({unitError: false});
      }
    }

    //No error, save the condition
    if (!hasError)
      this.props.handleSave(conIndex, conObj, this.props.isAdd);
  }

  handleCancel = (index) => {
    this.setState({
      nameError: false,
      startTimeError: false,
      endTimeError: false,
      durationError: false,
      unitError: false,
    })
    this.props.handleCancel(index);
  }

  render(){

    const { classes } = this.props;

    return(
      <div>
        <Dialog 
          open={this.props.isOpen} 
          className={classes.dialog} 
          maxWidth={`md`}
        >
          <DialogTitle>
            <TextField
              error={this.state.nameError}
              label={this.state.nameError? 'Please enter a name':'Name'}
              className={classes.textField}
              value={this.state.conObj.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </DialogTitle>
          <DialogContent>
            <List disablePadding classesName={classes.listItemGroup}>
              <ListItem
                className={classes.listItem}
                disableGutters
              >
                <Checkbox
                  checked = {this.state.conObj.schedule_from}
                  onChange={this.handleCheck("schedule_from")}
                />
                <div className={classes.TimeLabelGroup}>
                  <ListItemText primary='From' className={classes.listItemText}/>
                  <TextField
                    type="time"
                    disabled={!this.state.conObj.schedule_from}
                    error={this.state.startTimeError}
                    onChange={(e) => this.handleTimeChange({event: e, mode: 'startTime'})}
                    value={this.state.conObj.startTime}
                    className = {classes.timePick}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 60, // 1 min
                    }}
                  />
                  <ListItemText primary='to' className={classes.listItemText}/>
                  <TextField
                    type="time"
                    disabled={!this.state.conObj.schedule_from}
                    error={this.state.endTimeError}
                    onChange={(e) => this.handleTimeChange({event: e, mode: 'endTime'})}
                    value={this.state.conObj.endTime}
                    className = {classes.timePick}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 60, // 1 min
                    }}
                  />
                </div>
              </ListItem>
              <ListItem
                disableGutters
                className={classes.listItem}
              >
                <Checkbox
                  checked = {this.state.conObj.schedule_last}
                  onChange={this.handleCheck("schedule_last")}
                />
                <div className={classes.TimeLabelGroup}>
                  <ListItemText primary='Last for' className={classes.listItemText}/>
                  <TextField
                    id="select-currency"
                    disabled={!this.state.conObj.schedule_last}
                    error={this.state.durationError}
                    select
                    className={classes.textField}
                    value={this.state.conObj.duration}
                    onChange={this.handleChange("duration")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    { (this.state.conObj.unit === 'hour') ? (
                        hourInterval.map(option => 
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        )
                      ) : (
                        minInterval.map(option => 
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        )
                      )
                    }
                  </TextField>
                  <ListItemText primary=' ' className={classes.listItemText}/>
                  <TextField
                    select
                    disabled={!this.state.conObj.schedule_last}
                    error={this.state.unitError}
                    className={classes.textField}
                    value={this.state.conObj.unit}
                    onChange={this.handleChange("unit")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    {timeUnit.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                </ListItem>
              <ListItem
                divider = {true}
              >
                <Typography variant="subheading">
                  Rule
                </Typography>
              </ListItem>
              {
                _.map(this.state.conObj.rule, (ruleObj, ruleIndex) =>
                  <ListItem 
                    disableGutters
                    key={ruleIndex}
                  >
                    <Rule 
                      ruleObj = {ruleObj}
                      ruleIndex = {ruleIndex}
                      handleChangeRule = {this.handleChangeRule}
                      handleCross = {() => this.handleCross(ruleIndex)}
                      handleParaChange = {this.handleParaChange}
                    />
                  </ListItem>
                )
              }
              <ListItem disableGutters>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick = {() => this.handleAddRule()}
                >
                  + rule
                </Button>
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleCancel(this.state.conIndex)} color="primary">
              cancel
            </Button>
            <Button onClick={()=>this.handleSave(this.state.conIndex, this.state.conObj)} color="primary" autoFocus>
              save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )

  }

}

export default withStyles(styles)(ConditionDialog);