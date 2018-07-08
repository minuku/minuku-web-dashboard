import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { streamGenerator } from './streamGenerator.js';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import purple from '@material-ui/core/colors/purple';




const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  
});

class Rule extends React.Component{

  render(){

    const { classes } = this.props;

    return (
      <div>
        <TextField
          select
          value = {this.props.ruleObj.name}
          className={classes.textField}
          onChange={this.props.handleChangeRule()}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {
            streamGenerator.map(option => 
            <MenuItem value={option.name} >
              {option.name}
            </MenuItem>
            )
          }
        </TextField>
        <IconButton onClick = {this.props.handleCross}>
            <CloseIcon />
        </IconButton>
      </div>
    )

  }

}

export default withStyles(styles)(Rule);