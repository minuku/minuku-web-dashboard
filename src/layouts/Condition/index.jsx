import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
    primary: yellow
  },
});


const hourInterval = Array(12).fill().map((value, index) => index + 1);
const minInterval = Array(60).fill().map((value, index) => index + 1);
const amPm = ['AM', 'PM'];
const timeUnit = ['hour', 'minute', 'second'];



class RecipeReviewCard extends React.Component {
  state = { 
    open: false,
    name: 'condition 1',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    //console.log("click");
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Customize"
          />
          <CardContent>
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                divider = {true}
                disableGutters = {true}
                dense = {false}
              >
                <ListItemText primary={`Condition ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments" onClick={this.handleClickOpen}>
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <MuiThemeProvider theme={theme}>
              <Button 
                variant="contained" 
                color="primary" 
                className={classes.margin}
                onClick={this.handleClickOpen}
              >
                + ADD
              </Button>
            </MuiThemeProvider>
          </CardActions>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
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
                  id="select-currency"
                  select
                  className={classes.textField}
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                <ListItemText primary='to' />
                <TextField
                  id="select-currency"
                  select
                  className={classes.textField}
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                  value={this.state.currency}
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
                  value={this.state.currency}
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
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);