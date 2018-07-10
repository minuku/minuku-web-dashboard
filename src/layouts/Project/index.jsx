import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography'
//import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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

const options = [
  'Delete',
  'Rename',
  'Clear',
];

var projectConfig = [
  { 
    id: 0,
    checked: false,
    action: `收集運動資料`,
    situation: `室外運動`,
    schedule: `每日兩次`
  },
  { 
    id: 1,
    checked: false,
    action: `發問卷`,
    situation: `室內運動`,
    schedule: `每日三次`
  },
  { id: 2,
    checked: false,
    action: `通知Admin`,
    situation: `進入睡眠`,
    schedule: `每日一次`
  },
];

class Project extends React.Component {

  state = {
    showingProjectId: 0,
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
    ],

  } ;

  handleEditClick = (v) => {
    //alert(v.action);
    //v.action = `已更改`;
    //alert(v.action);
    alert(`Editing function is unfinished, I am working on it QQ` );
  };

  handleSelectClick = (v) =>{
    v.checked=!v.checked;
    alert(`This is select click ${v.checked}`);
  };

  handleTest = () =>{
    alert('handleTest, also unfinished.QQ');
  };

//TO DO List: Do we need Boot-Strap-Table???

  render () {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
      <Grid container className={classes.root} spacing={0} direction="column">
        {/*<Grid item xs>
          <Typography>"Project A" </Typography>
        </Grid>*/}
        <Grid item xs>
            
          <Paper>
          <Table className={classes.title}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell ></TableCell>
                <TableCell >Label</TableCell>
                <TableCell padding="dense">Action</TableCell>
                <TableCell padding="dense">Situation</TableCell>
                <TableCell padding="dense">Schedule</TableCell>
                <TableCell numeric padding="checkbox">
                  <IconButton>
                    <MoreVertIcon onClick={() => this.handleEditClick(0)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>      
          {projectConfig.map(val => ( 
              <TableRow>
                <TableCell padding="checkbox"><Checkbox color="primary" onClick={() => this.handleSelectClick(val)}/> </TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell padding="dense">{val.action}</TableCell>
                <TableCell padding="dense">{val.situation}</TableCell>
                <TableCell padding="dense">{val.schedule}</TableCell>
                <TableCell numeric padding="checkbox">
                  <IconButton>
                  <EditIcon onClick={() => this.handleEditClick(0)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
          </Paper>
        
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Project)