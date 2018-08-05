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
  textField: {
    width: '50px'
  }
  
});

class ThreeInput extends React.Component{

  render(){

    const { classes } = this.props;

    return(
      <div>
        <ListItem>
        <TextField
          type="number"
          label="X"
          value={this.props.inputValue[0]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(0, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Y"
          value={this.props.inputValue[1]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(1, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Z"
          value={this.props.inputValue[2]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(2, this.props.ruleIndex, e)}
          margin="normal"
        />
        <ListItemText primary='-' />
        <TextField
          type="number"
          label="X"
          value={this.props.inputValue[3]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(3, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Y"
          value={this.props.inputValue[4]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(4, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Z"
          value={this.props.inputValue[5]}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(5, this.props.ruleIndex, e)}
          margin="normal"
        />
        </ListItem>
      </div>
    )

  }

}

export default withStyles(styles)(ThreeInput);