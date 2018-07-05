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
    minWidth: 400,
    width: '80%',
    //maxWidth: 800
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
  formhead:{
    fontSize: 14,
    style: 'color=gray',
    color: 'gray'
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200,
  },
  Checkbox:{
    color: 'primary'
  }
})


class Project extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true
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
              <table> 
                <tr> 
                  <th><Checkbox disabled/></th>
                  <th><Typography className={classes.formhead}>
                    Label       Action    Situation   Schedule    
                  </Typography></th>
                </tr>
              </table>
            <Divider />
              <table>
                <tr>
                  <th><Checkbox
                  checked={this.state.checkA}
                  color='primary'
                  /></th>
                  <th><Typography className={classes.formhead}>
                              收集運動資料    在家運動   每日兩次   
                  </Typography></th>
                </tr>
              </table>

              <table>
                <tr>
                  <th><Checkbox
                  checked={this.state.checkB}
                  color='primary'
                  /></th>
                  <th><Typography className={classes.formhead}>
                                    發問卷    在家運動   每日兩次    
                  </Typography></th>
                </tr>
              </table>    

              <table>
                <tr>
                  <th><Checkbox
                  checked={this.state.checkC}
                  color='primary'
                  /></th>
                  <th><Typography className={classes.formhead}>
                                 通知Admin    在家運動   每日兩次
                  </Typography></th>
                </tr>
              </table>         
            
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Project)