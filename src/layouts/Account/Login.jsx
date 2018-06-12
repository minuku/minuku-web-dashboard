import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Link } from "react-router-dom"

import { Dialog } from 'components'

const styles = theme => ({
  cardWrapper: {
    width: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: '100vh',
    position: 'relative',
    padding: 20
  },
  card: {
    width: `100%`,
    maxWidth: 400,
    height: 250,
    padding: 15,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`
  },
  textField: {
    width: `100%`
  },
  pos: {
    marginTop: 12
  }
})

class SimpleCard extends React.Component {
  state = {
    account: ``,
    password: ``,
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  userLogin = () => {
    this.props.login()
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.cardWrapper}>
        <Card className={classes.card}>

          <CardContent>
            <Typography variant="headline" component="h2">
              Minuku Login
            </Typography>
            <TextField
              required
              id="account"
              label="account"
              className={classes.textField}
              value={this.state.account}
              onChange={this.handleChange('account')}
            />
            <TextField
              required
              id="password"
              label="password"
              type="password"
              autoComplete="current-password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange('password')}
            />

            <Typography variant="caption" gutterBottom className={classes.pos}>
              <Link to='/signup'>click here to signup.</Link>
            </Typography>
          </CardContent>

          <CardActions>
            <Button variant="contained" color="primary" onClick={this.userLogin}>login</Button>
          </CardActions>
        </Card>
        <Dialog
          isOpen={this.state.open}
          handleClose={this.handleClose}
          handleClickOpen={this.handleClickOpen}
          title={`Login Fail`}
          content={`you may meet some login issue, please mail to armuro.`}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SimpleCard)
