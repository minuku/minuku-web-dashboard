import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

// fake apiUrl
import { userService } from 'utils/userService'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
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

class Porfile extends React.Component {
  state = {
    displayName: ``,
    email: ``
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  updateprofile () {
    fetch(`https://minukutest.nctu.me/minukutest/queryProfile`, {
      method: "POST",
      body: JSON.stringify({signupAccount: `armuro`, userName: `yoarmuro`}),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
    .then((res) => {
      console.log(res)
      return res.text()
    })
  }
  componentDidMount () {
    // fetch(`https://minukutest.nctu.me/minukutest/queryProfile?signupAccount=armuro`)
    // .then(res => console.log(res))
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
            <Button variant="contained" size="small" color="primary">Update</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Porfile)
