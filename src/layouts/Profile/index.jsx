import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import Dashboard from 'layouts/Dashboard'

// fake apiUrl
import { userService } from 'utils/userService'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

class Profile extends React.Component {
  state = {
    displayName: ``,
    email: ``
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  updateProfile = () => {
    userService.updateProfile({displayName: this.state.displayName})
    .then((res) => {
      console.log(res)
    })
  }
  componentDidMount () {
    userService.queryProfile()
    .then((res) => {
      this.setState({
        displayName: res.displayName
      })
    })
  }
  render () {
    const { classes } = this.props
    return (
      <Dashboard>
        <div className={classes.root}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                User Profile
              </Typography>

              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="displayName"
                  label="display name"
                  className={classes.textField}
                  value={this.state.displayName}
                  onChange={this.handleChange('displayName')}
                  margin="normal"
                />

                <TextField
                  disabled
                  id="email"
                  label="email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                />
              </form>

            </CardContent>

            <CardActions>
              <Button
                onClick={this.updateProfile}
                variant="contained"
                size="small"
                color="primary">Update</Button>
            </CardActions>
          </Card>
        </div>
      </Dashboard>
    )
  }
}

export default withStyles(styles)(Profile)
