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

class FourInput extends React.Component{

  render(){

    const { classes } = this.props;

    return(
      <div>
        <ListItem>
        <TextField
          type="number"
          label="Xsin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(0, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Ysin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(1, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Zsin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(2, this.props.ruleIndex, e)}
          margin="normal"
        />
        <TextField
          type="number"
          label="Cos"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>this.props.handleChange(3, this.props.ruleIndex, e)}
          margin="normal"
        />
        
        <ListItemText primary='-' />
        <TextField
          type="number"
          label="Xsin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(4, this.props.ruleIndex, e)}
        />
        <TextField
          type="number"
          label="Ysin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(5, this.props.ruleIndex, e)}
        />
        <TextField
          type="number"
          label="Zsin"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(6, this.props.ruleIndex, e)}
        />
        <TextField
          type="number"
          label="Cos"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e)=>this.props.handleChange(7, this.props.ruleIndex, e)}
        />
        </ListItem>
      </div>
    )

  }

}

export default withStyles(styles)(FourInput);