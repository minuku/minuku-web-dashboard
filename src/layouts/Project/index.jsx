import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//import { black } from 'material-ui/styles/colors'
//import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

// fake apiUrl
//import { userService } from 'utils/userService'



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
    minWidth: 275,
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

class Project extends React.Component {
  state = {
    displayName: ``,
    email: ``
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="black">
              Project A
            </Typography>
            <Divider />  
            <Checkbox/>
            <Divider />
            <Checkbox/> <br/>
            <Checkbox/> <br/>
            <Checkbox/> <br/>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Project)