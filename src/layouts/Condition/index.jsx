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
const conditionMenu = ['Moving', 'Riding bike', 'Static'];
const hourInterval = Array(12).fill().map((value, index) => index + 1);
const minInterval = Array(60).fill().map((value, index) => index + 1);
const amPm = ['AM', 'PM'];
const timeUnit = ['hour', 'minute', 'second'];
const optionMenu = ['weak light', 'lower noise', 'battery', 'speed', 'GPS', 'location'];

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
        rule: [],
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
        rule: [],
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
        rule: [],
      },
    ],
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

  handleChange = (event) => {
    let tmp = this.state.conditionList;
    tmp[0][event.target.id] = event.target.value;
    this.setState({conditionList: tmp});
  };

  render() {
    const { classes } = this.props;

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
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={condition.name}
                    index={index}
                    onChange={this.handleChange}
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
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary='From' />
                      <TextField
                        id=""
                        select
                        className={classes.textField}
                        value='10'
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        onChange={this.handleChange('name')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                      
                        onChange={this.handleChange('name')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        v
                        onChange={this.handleChange('name')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        
                        onChange={this.handleChange('currency')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        
                        onChange={this.handleChange('currency')}
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
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary='Last for' />
                      <TextField
                        id="select-currency"
                        select
                        className={classes.textField}
                        
                        onChange={this.handleChange('currency')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        
                        onChange={this.handleChange('currency')}
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
                        id="select-currency"
                        select
                        className={classes.textField}
                        
                        onChange={this.handleChange('currency')}
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
                    <ListItem>
                      <TextField
                          id=""
                          select
                          className={classes.textField}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                        >
                          {optionMenu.map(option => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                      </TextField>
                      <IconButton>
                          <CloseIcon />
                      </IconButton>
                    </ListItem>
                    <ListItem>
                      <Button 
                        variant="contained" 
                        color="primary" 
                      >
                        + rule
                      </Button>
                    </ListItem>
                  </List>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    cancel
                  </Button>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
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