import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import EditIcon from '@material-ui/icons/Edit';
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

// fake apiUrl
//import { userService } from 'utils/userService'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
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
  listhead: {
    fontSize: 14
  },
})


class Project extends React.Component {

  state = {

    checkedA: true,
    checkedB: true,
    checkedC: true,
    
    list: [                           //list of project
      {
        title: `Project A`,
        list: [                       //list of setting
          {
            action: `收集運動資料`,
            situation: `室外運動`,
            schedule: `每日兩次`
          },
          {
            action: `發問卷`,
            situation: `室外運動`,
            schedule: `每日兩次`
          },
          {
            action: `通知Admin`,
            situation: `室外運動`,
            schedule: `每日兩次`
          },
        ] 
      }
    ] 

  } //state end


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

            <List>
            <ListItem >

              <Checkbox disabled/>
              <ListItemText primary="Label" />
              <ListItemText primary="Action"/>
              <ListItemText primary="Situation"/>
              <ListItemText primary="Schedule" />
              <ListItemText primary="      " />
            </ListItem>

            <Divider/>

            <ListItem >
              <Checkbox />
              <ListItemText primary="      " />
              <ListItemText primary="收集運動資料"/>
              <ListItemText primary="在家運動"/>
              <ListItemText primary="每日兩次" />
              <ListItemIcon><IconButton><EditIcon/></IconButton></ListItemIcon>
            </ListItem>

            <ListItem >
              <Checkbox />
              <ListItemText primary="      " />
              <ListItemText primary="發問卷"/>
              <ListItemText primary="在家運動"/>
              <ListItemText primary="每日兩次" />
              <ListItemIcon><IconButton><EditIcon/></IconButton></ListItemIcon>
            </ListItem>

            <ListItem >
              <Checkbox />
              <ListItemText primary="      " />
              <ListItemText primary="通知Admin"/>
              <ListItemText primary="在家運動"/>
              <ListItemText primary="每日兩次" />
              <ListItemIcon><IconButton><EditIcon/></IconButton></ListItemIcon>
            </ListItem>
                          

            </List>
          </CardContent>
          <CardActions>     
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Project)