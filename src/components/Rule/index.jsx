import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { streamGenerator } from 'streamGenerator.js'

class Rule extends React.Component{

  render(){

    return (
      <div>
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
        <IconButton onClick = {() => this.handleCross({index, ruleIndex})}>
            <CloseIcon />
        </IconButton>
      </div>
    )

  }

}

export default withStyles(styles, { withTheme: true })(Rule)