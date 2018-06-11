import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  cardWrapper: {
    width: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: '100vh',
    position: 'relative'
  },
  card: {
    width: 400,
    height: 250,
    padding: 15,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: `100%`,
  }
})

class SimpleCard extends React.Component {
  state = {
    account: ``,
    passward: ``
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
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
              id="account"
              label="account"
              className={classes.textField}
              value={this.state.account}
              onChange={this.handleChange('account')}
            />
            <TextField
              id="passward"
              label="passward"
              type="password"
              autoComplete="current-password"
              className={classes.textField}
              value={this.state.passward}
              onChange={this.handleChange('passward')}
            />
          </CardContent>

          <CardActions>
            <Button variant="contained" color="primary">login</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(SimpleCard)
