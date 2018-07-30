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
import TimeInput from 'material-ui-time-picker';
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

  handleTimeChange = ({time, mode}) => {
    let tmp = _.cloneDeep(this.state.conObj);
    tmp[mode] = time;
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
    if(conObj.name){
      this.setState({nameError: false});
      this.props.handleSave(conIndex, conObj);
    } else{
      this.setState({nameError: true});
    }
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
                  <TimeInput
                    mode='12h'
                    onChange={(time) => this.handleTimeChange({time: time, mode: 'startTime'})}
                    value={this.state.conObj.startTime}
                    className = {classes.timePick}
                  />
                  <ListItemText primary='to' className={classes.listItemText}/>
                  <TimeInput
                    mode='12h'
                    onChange={(time) => this.handleTimeChange({time: time, mode: 'endTime'})}
                    value={this.state.conObj.endTime}
                    className = {classes.timePick}
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
            <Button onClick={this.props.handleCancel} color="primary">
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