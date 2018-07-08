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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Table } from 'material-ui';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

// fake apiUrl
//import { userService } from 'utils/userService'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 30,
  },
  listhead: {
    fontSize: 14
  },
})


class Project extends React.Component {

  state = {
    showingProjectId: 0,
    PJlist: [                           //list of project
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
            situation: `室內運動`,
            schedule: `每日三次`
          },
          { id:2,
            checked: false,
            action: `通知Admin`,
            situation: `進入睡眠`,
            schedule: `每日一次`
          },
        ] 
      },
      {
        title: `Project B`,
        list: [                       //list of setting
          { id: 0,
            checked: false,
            action: `偵測光線`,
            situation: `室內`,
            schedule: `每日兩次`
          },
          { id:1,
            checked: false,
            action: `紀錄GPS座標`,
            situation: `出門`,
            schedule: `每日一次`
          },
          { id:2,
            checked: false,
            action: `紀錄加速度`,
            situation: `坐上交通工具`,
            schedule: `每日一次`
          },
        ] 
      }
    ] 

  } ;



  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
  
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs>
            <Grid container className={classes.demo} direction="column" spacing={0}>
              {[0].map(value => (
                <Grid key={value} item >
                  <Paper className={classes.paper} >   
                    <List>
                      <ListItem>
                        <Typography className={classes.title}> {this.state.PJlist[value].title} </Typography>
                      </ListItem>
                      <ListItem >
                        <Grid container className={classes.headerlist} direction="row" spacing={0}>
                          <Grid item xs></Grid>
                          <Grid item xs={4}>Label</Grid>
                          <Grid item xs={2}>Action</Grid>
                          <Grid item xs={2}>Situation</Grid>
                          <Grid item xs={2}>Schedule</Grid>
                          <Grid item xs></Grid>
                        </Grid>
                      </ListItem>
                      <Divider/>
                        {[0,1,2].map(val => (  
                            <ListItem >
                            <Grid container className={classes.headerlist} direction="row" spacing={0}>
                              <Grid item xs>  <Checkbox color="primary"/> </Grid>
                              <Grid item xs={4}></Grid>
                              <Grid item xs={2}>{this.state.PJlist[value].list[`${val}`].action}</Grid>
                              <Grid item xs={2}>{this.state.PJlist[value].list[`${val}`].situation}</Grid>
                              <Grid item xs={2}>{this.state.PJlist[value].list[`${val}`].schedule}</Grid>
                              <Grid item xs> <ListItemSecondaryAction>
                                <IconButton> <EditIcon /></IconButton>
                              </ListItemSecondaryAction> </Grid>
                            </Grid>
                          </ListItem>
                        ))}
                    </List>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(Project)