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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

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
          { id: 0,
            checked: false,
            action: `收集運動資料`,
            situation: `室外運動`,
            schedule: `每日兩次`
          },
          { id:1,
            checked: false,
            action: `發問卷`,
            situation: `室外運動`,
            schedule: `每日兩次`
          },
          { id:2,
            checked: false,
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
              <Checkbox color="primary"/>
              <ListItemText primary="      " />
              <ListItemText primary="收集運動資料"/>
              <ListItemText primary="在家運動"/>
              <ListItemText primary="每日兩次" />
              <ListItemIcon><IconButton><EditIcon/></IconButton></ListItemIcon>
            </ListItem>
                          
            </List>

            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={true}>
                <Grid container className={classes.demo} direction="column" spacing={24}>
                  {[0, 1, 2].map(value => (
                    <Grid key={value} item >
                      <Paper className={classes.paper} >
                        <Typography> {`Hi${value}`} </Typography>
                        <Typography> {this.state.list[0].list[`${value}`].action} </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
           </Grid>

          </CardContent>
          <CardActions>     
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Project)