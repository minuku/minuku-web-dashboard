import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const styles = theme =>( {
  content: {
    position: 'absolute',
    right: '0',
    top: '100%',
    width: '75%',
    height:'100vh',
    borderLeft: '1px solid black',
    padding: '5%'
  },
  theme:{
    padding: 10
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 300
  }
})

class Preference extends React.Component{

  state =  {
    checkedA: false,
    checkedB: false,
    size: ''
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.checked})
  }

  handleSizeChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {classes} = this.props
    return(
      <div className={classes.content} id="preference">
        <h1>Preference</h1>
        <h3>Mode</h3>
        <div>
          <Checkbox
            checked={this.state.checkedA}
            onChange={this.handleChange('checkedA')}
          />
            <label className={classes.theme}>Night Mode</label>
        </div>
        
        <div>
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
          />
          <label for="colorBlindMode" className={classes.theme}>Color Blind Mode</label>
        </div>
       
        <h3>Font Size</h3>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sizeDefine">Font Size</InputLabel>
          <Select
            value={this.state.size}
            onChange={this.handleSizeChange}
            inputProps={{
              name: 'size',
              id: 'sizeDefine',
            }}
          >
            <MenuItem value="">
              <em>Default(16)</em>
            </MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={28}>28</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(Preference)