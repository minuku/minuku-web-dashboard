import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { streamGenerator } from './streamGenerator.js';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import purple from '@material-ui/core/colors/purple';

import DropDown from './dropDown.jsx';
import OneInput from './oneInput.jsx';
import ThreeInput from './threeInput.jsx';
import FourInput from './fourInput.jsx';

import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  
});

const streamGenMenu = ['transportation', 'accelerometer', 'rotation', 'gravity', 'gyroscope', 'light', 'magnetic', 'pressure', 'proximity', 'temperature', 'humidity',];

class Rule extends React.Component{

  render(){

    const { classes } = this.props;

    return (
      <div>
        <ListItem>
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
            streamGenMenu.map(option => 
            <MenuItem value={option} >
              {option}
            </MenuItem>
            )
          }
        </TextField>
        {
          (
            () => {
              switch (streamGenerator[this.props.ruleObj.name]['inputType']) {
                case 'DropDown':  return (<DropDown menuValue = {this.props.ruleObj.mode} />);
                case 'OneInput':  return (<OneInput inputValue = {this.props.ruleObj.parameter}/>);
                case 'ThreeInput':return (<ThreeInput inputValue = {this.props.ruleObj.parameter}/>);
                case 'FourInput': return (<FourInput inputValue = {this.props.ruleObj.parameter}/>);
                default:          return (<div></div>);
              }
            }
          )()
        }
        
        <IconButton onClick = {this.props.handleCross}>
            <CloseIcon />
        </IconButton>
        </ ListItem>
      </div>
    )

  }

}

export default withStyles(styles)(Rule);