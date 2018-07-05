import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import _ from 'lodash';
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: yellow
  },
});

// Menu Item
const hourInterval = Array(12).fill().map((value, index) => index + 1);
const minInterval = Array(60).fill().map((value, index) => index + 1);
const amPm = ['AM', 'PM'];
const timeUnit = ['hour', 'minute', 'second'];
const optionMenu = [
  {
    name: 'weak light',
    parameter: [],
  },
  {
    name: 'lower noise',
    parameter: [],
  }, 
  {
    name: 'battery',
    parameter: [30],
  }, 
  {
    name: 'speed',
    parameter: ['10', 'km'],
  }, 
  {
    name: 'location',
    parameter: ['your location'],
  },
];

class Condition extends React.Component {

  state = { 
    conditionList: [
      {
        isOpen: false,
        name: '移動中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [
          {
            name: "speed",
            parameter: ['10', 'km'],
          },
          {
            name: "location",
            parameter: ['National Chiao Tung University'],
          },
        ],
      },
      {
        isOpen: false,
        name: '騎腳踏中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [
          {
            name: "speed",
            parameter:['30', 'km'],
          },
        ],
      },
      {
        isOpen: false,
        name: '靜止中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [
          {
            name: "speed",
            parameter: [0, 'km'],
          },
          {
            name: "lower noise",
            parameter: [],
          },
        ],
      },
    ],
    anchorEl: null,
  };

  handleEdit = (index) => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = true;
    this.setState({conditionList: tmp});
  };

  handleDelete = (index) => {
    let tmp = this.state.conditionList;
    tmp.splice(index, 1);
    this.setState({conditionList: tmp});
  };

  handleAdd = () => {
    let tmp = this.state.conditionList;
    tmp.push({
      isOpen: true,
      name: 'New Condition',
      schedule_from: false,
      startHr: 8,
      startMin: 30,
      startM: 'AM',
      endHr: 10,
      endMin: 30,
      endM: 'PM',
      schedule_last: false,
      duration: 10,
      unit: 'minute',
      rule: [],
    });
    this.setState({conditionList: tmp});
  };

  handleClose = (index) => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = false;
    this.setState({conditionList: tmp});
  };

  handleChange = ({i, t}) => event => {
    let tmp = this.state.conditionList;
    tmp[i][t] = event.target.value;
    this.setState({conditionList: tmp});
  };

  handleCheck = ({i, t}) => event => {
    let tmp = this.state.conditionList;
    tmp[i][t] = event.target.checked;
    this.setState({conditionList: tmp});
  };

  handleChangeRule = ({i, ri, t}) => event => {
    let tmp = this.state.conditionList;
    tmp[i]['rule'][ri][t] = event.target.value;
    this.setState({conditionList: tmp});
  }
  handleParChange = ({index, ruleIndex, parIndex}) => event =>{
    let tmp = this.state.conditionList;
    tmp[index]['rule'][ruleIndex]['parameter'][parIndex] = event.target.value;
    this.setState({conditionList: tmp});
  }
  handleCloseMenu = () => {
    //let tmp = this.state.conditionList;
    /*tmp[index].rule.push({
      name: event.target.value,
      parameter: [],
    });*/
    this.setState({
      //conditionList: tmp,
      anchorEl: null,
    });
  };
  handleAddRule = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardHeader
            title="Condition"
          />
          <CardContent>
          <List>
            {
              _.map(this.state.conditionList, (condition, index) => 
              <ListItem divider disableGutters>
                <ListItemText primary={condition.name}/>
                <ListItemSecondaryAction>
                  <IconButton onClick={(e) => this.handleEdit(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={(e) => this.handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              <Dialog
                open={condition.isOpen}
                onClose={(e) => this.handleClose(index)}
              >
                <DialogTitle>
                  <TextField
                    label="Name"
                    className={classes.textField}
                    value={condition.name}
                    onChange={this.handleChange({i: index, t: "name"})}
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
                        checked = {condition.schedule_from}
                        onChange={this.handleCheck({i: index, t: "schedule_from"})}
                      />
                      <ListItemText primary='From' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.startHr}
                        onChange={this.handleChange({i: index, t: "startHr"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {hourInterval.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary='：' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.startMin}
                        onChange={this.handleChange({i: index, t: "startMin"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {minInterval.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary=' ' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.startM}
                        onChange={this.handleChange({i: index, t: "startM"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {amPm.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary='to' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.endHr}
                        onChange={this.handleChange({i: index, t: "endHr"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {hourInterval.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary='：' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.endMin}
                        onChange={this.handleChange({i: index, t: "endMin"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {minInterval.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary=' ' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.endM}
                        onChange={this.handleChange({i: index, t: "endM"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {amPm.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </ListItem>
                    <ListItem
                      role={undefined}
                      dense
                      className={classes.listItem}
                    >
                      <Checkbox
                        checked = {condition.schedule_last}
                        onChange={this.handleCheck({i: index, t: "schedule_last"})}
                      />
                      <ListItemText primary='Last for' />
                      <TextField
                        id="select-currency"
                        select
                        className={classes.textField}
                        value={condition.duration}
                        onChange={this.handleChange({i: index, t: "duration"})}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {hourInterval.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <ListItemText primary=' ' />
                      <TextField
                        select
                        className={classes.textField}
                        value={condition.unit}
                        onChange={this.handleChange({i: index, t: "unit"})}
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
                    </ListItem>
                    <ListItem
                      divider = {true}
                    >
                      <Typography variant="subheading">
                        Rule
                      </Typography>
                    </ListItem>
                    {
                      _.map(condition.rule, (ruleObj, ruleIndex) =>
                        <ListItem>
                          <TextField
                              select
                              value = {ruleObj.name}
                              className={classes.textField}
                              onChange={this.handleChangeRule({i: index, ri: ruleIndex, t: "name"})}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                },
                              }}
                              margin="normal"
                            >
                              {optionMenu.map(option => (
                                <MenuItem key={option.name} value={option.name}>
                                  {option.name}
                                </MenuItem>
                              ))}
                          </TextField>
                          <IconButton>
                              <CloseIcon />
                          </IconButton>
                        </ListItem>
                      )
                    }
                    <ListItem>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick = {this.handleAddRule}
                      >
                        + rule
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleCloseMenu}
                      >
                        {optionMenu.map(option => 
                          <MenuItem 
                            key={option.name} 
                            value={option.name}
                            onClick={this.handleCloseMenu}
                          >
                            {option.name}
                          </MenuItem>
                        )}
                      </Menu>
                    </ListItem>
                  </List>
                </DialogContent>
                <DialogActions>
                  <Button onClick={(e) => this.handleClose(index)} color="primary">
                    cancel
                  </Button>
                  <Button onClick={(e) => this.handleClose(index)} color="primary" autoFocus>
                    done
                  </Button>
                </DialogActions>
              </Dialog>
              </ListItem>
              )
            }
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Condition);