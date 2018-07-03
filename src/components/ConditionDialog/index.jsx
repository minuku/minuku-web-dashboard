import React from 'react';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

// Menu Item
const hourInterval = Array(12).fill().map((value, index) => index + 1);
const minInterval = Array(60).fill().map((value, index) => index + 1);
const amPm = ['AM', 'PM'];
const timeUnit = ['hour', 'minute', 'second'];

class ConditionDialog extends React.Component{

  render(){
    <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle id="edit-dialog-title">
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
                    {this.state.optionList.map(option => (
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
  }

}

export default ConditionDialog