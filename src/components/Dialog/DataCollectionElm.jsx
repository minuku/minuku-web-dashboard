import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { dataCollectionType } from './DataCollectionType'

const styles = theme => ({
  container: {
    flexGrow: 1,
    height: `100%`,
    zIndex: 1,
    overflow: 'scroll',
    position: 'relative',
    display: 'flex',
    flexDirection: `column`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  }
})

class DataCollectionElm extends React.Component {
  state = {
    name: `temp`,
    type: 'EUR'
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  render () {
    const { classes } = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title"
          label="title"
          className={classes.textField}
          value={this.props.title}
          onChange={this.props.handleChange('dataCollectionTitle')}
          margin="normal"
        />
        <TextField
          select
          id="select-data-type"
          label="type"
          className={classes.textField}
          value={this.props.dataCollectionType}
          onChange={this.props.handleChange('dataCollectionType')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {dataCollectionType[this.props.type].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    )
  }
}

export default withStyles(styles)(DataCollectionElm)
