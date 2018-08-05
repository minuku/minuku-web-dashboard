import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import purple from '@material-ui/core/colors/purple';
import { ListItem } from '@material-ui/core';

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  textField1: {
    width: '50px'
  }
});

class OneInput extends React.Component{

  render(){

    const { classes } = this.props;

    return(
      <div>
        <ListItem>
        <TextField
          type="number"
          value={this.props.inputValue[0]}
          className={classes.textField1}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(0, this.props.ruleIndex, e)}
        />
        <ListItemText primary='-' />
        <TextField
          type="number"
          value={this.props.inputValue[1]}
          className={classes.textField1}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(1, this.props.ruleIndex, e)}
        />
        </ ListItem>
      </div>
    )

  }

}

export default withStyles(styles)(OneInput);