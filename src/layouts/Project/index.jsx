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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
  'Rename',
  'AddRule',
  'Clear',
  'Delete',
];

class Project extends React.Component {

  state = {
    showingProjectId: 0,
    title: `Project A`,
    anchorEl: null,
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

  handleMoreVetClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMoreVertClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProjectNameClick = (v) => {
    this.setState({title:`Project B`});
    alert(`This icon should change title name.` );
  };

  handleSelectClick = (v) =>{
    v.checked=!v.checked;
    alert(`This is select click ${v.checked}`);
  };

  handleEditClick = (v) => {
    const temp = this.state.list ;
    temp[v.id].action = `Changed`;
    this.setState( { list : temp});
    alert(`Editing ${v.id}` );
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
            <List>
              <ListItem>
                <Typography className={classes.title}>{this.state.title}</Typography>
                <ListItemSecondaryAction>
                  <IconButton>
                    <MoreVertIcon onClick={() => this.handleProjectNameClick(0)} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          <Table className={classes.title}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell padding="dense"></TableCell>
                <TableCell padding="dense">Label</TableCell>
                <TableCell padding="dense">Action</TableCell>
                <TableCell padding="dense">Situation</TableCell>
                <TableCell padding="dense">Schedule</TableCell>
                <TableCell numeric padding="checkbox">
                  {/*<IconButton>
                    <MoreVertIcon onClick={() => this.handleEditClick(0)} />
                  </IconButton>*/}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>   
              {/*   
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
          */}
            {this.state.list.map(val => ( 
              <TableRow>
                <TableCell padding="checkbox"><Checkbox color="primary" onClick={() => this.handleSelectClick(val)}/> </TableCell>
                <TableCell padding="dense"></TableCell>
                <TableCell padding="dense"></TableCell>
                <TableCell padding="dense">{val.action}</TableCell>
                <TableCell padding="dense">{val.situation}</TableCell>
                <TableCell padding="dense">{val.schedule}</TableCell>
                <TableCell numeric padding="checkbox">
                  <IconButton>
                  <EditIcon onClick={() => this.handleEditClick(val)} />
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