import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import AccountRoutes from 'routes/account.js'
import { withStyles } from '@material-ui/core/styles'

const switchRoutes = (
  <Switch>
    {AccountRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)
const styles = theme => ({
  cardWrapper: {
    width: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: '100vh',
    position: 'relative'
  }
})

class Account extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.cardWrapper}>
        {switchRoutes}
      </div>
    )
  }
}

export default withStyles(styles)(Account)
