import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography'
//import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
    title: `Project A`,
    titleHolder: ``,
    anchorEl: null,
    renameDialog: false,
    settingDialog: false,
    deleteDialog:false,
    deleteProjectDialog:false,

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
    //List of settings END
  } ;

  temp = {
    setid: -1,
  };

//VERT MENU
  handleMoreVertClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMoreVertClose = () => {
    this.setState({ anchorEl: null });
  };


//RENAME PROJECT
  renameProject = () => {
    this.setState({ anchorEl: null });
    this.setState({renameDialog:true});
  }
  renameInput = name => event => {
    this.setState({titleHolder:event.target.value});
  }
  renameConfirmed = () => {
    if(this.state.titleHolder === '')
      alert('Project name can\'t be empty');
    else{
      this.setState({title: this.state.titleHolder } );
      this.setState({titleHolder: '' } );
      this.setState({renameDialog:false});
    }
  }
  renameDialogClose = () => {
    this.setState({titleHolder: '' } );
    this.setState({renameDialog : false});
  }

//REMOVE ALL
  removeAll = () => {
    this.state.list.length = 0;
    this.setState({ anchorEl: null });

  } 

//ADD ONE SETTING
  addSettings = () => {
    this.state.list.push({ id: this.state.list.length,
      checked: false,
      action: `通知Admin`,
      situation: `進入睡眠`,
      schedule: `每日一次`
    });
    this.setState({ anchorEl: null });
  }

//DELETE PROJECT
  deleteProjectDialog = (v) =>{
    this.setState({deleteProjectDialog:true});
    this.setState({ anchorEl: null });
  }
  deleteProjectDialogClose = () =>{
    this.setState({deleteProjectDialog:false});
  }
  confirmDeleteProject = () =>{
    this.setState({deleteProjectDialog:false});
    this.setState({title:`Project Deleted`});
  }




//DELETE SPECIFIC SETTING
  deleteDialog = (v) =>{
    this.temp.setid = this.state.list.indexOf(v);
    //alert(`DELETE${v.id},${this.temp.setid},${this.state.list.indexOf(v)}`);
    this.setState({deleteDialog:true});
  }
  deleteDialogClose = () =>{
    this.setState({deleteDialog:false});
  }
  confirmDelete = () =>{
    this.state.list.splice(this.temp.setid,1);
    this.setState({deleteDialog:false});
  }


//MODIFY A SPECIFIC SETTING
  settingDialog = (v) =>{
    this.setState({settingDialog:true});
    this.temp.setid = this.state.list.indexOf(v) ;
    //alert(`${v.id},${this.temp.setid}`);
  }
  settingDialogClose = () => {
    this.setState({settingDialog:false});
  }
  confirmSetting = () =>{
    this.setState({settingDialog:false});
  }

  

////// THESE ARE DEBUG FUNCTIONS /////////////////////
  handleProjectNameClick = (v) => {
    this.setState({title:`Project B`});
    this.setState({open:true});
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
///////////////////////////////////////////////////////
//TO DO List: Do we need Boot-Strap-Table???

  render () {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <Grid container className={classes.root} spacing={0} direction="column">
          <Grid item xs>
            
            <Paper>

              <List>
                <ListItem>
                  <Typography className={classes.title}>{this.state.title}</Typography>
                  <ListItemSecondaryAction>
                  <IconButton aria-owns={anchorEl ? 'moreVertMenu' : null}
                    aria-haspopup="true" onClick={this.handleMoreVertClick}>
                    <MoreVertIcon />
                  </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              {/*Tittle END*/}

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
                
                {/*Here comes setting table*/}
                <TableBody>   
                  {this.state.list.map(val => ( 
                    <TableRow>
                      <TableCell padding="checkbox"><Checkbox color="primary" onClick={() => this.handleSelectClick(val)}/> </TableCell>
                      <TableCell padding="dense"></TableCell>
                      <TableCell padding="dense"></TableCell>
                      <TableCell padding="dense">{val.action}</TableCell>
                      <TableCell padding="dense">{val.situation}</TableCell>
                      <TableCell padding="dense">{val.schedule}</TableCell>
                      <TableCell numeric padding="checkbox">
                        <IconButton onClick={() => this.settingDialog(val)}>
                          <EditIcon/>
                        </IconButton>
                        <IconButton onClick={() => this.deleteDialog(val)}>
                          <DeleteIcon/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            {/*End of paper */}

            <Menu id="moreVertMenu" anchorEl={anchorEl}
              open={Boolean(anchorEl)} onClose={this.handleMoreVertClose} >
              <MenuItem onClick={this.renameProject}>Rename project</MenuItem>
              <MenuItem onClick={this.addSettings}>Add settings</MenuItem>
              <MenuItem onClick={this.removeAll}>Remove all settings</MenuItem>
              <MenuItem onClick={this.deleteProjectDialog}>Delete project</MenuItem>
            </Menu>


            <Dialog open={this.state.renameDialog} onClose={this.renameDialogClose}>             
              <DialogTitle id="RDT">{`Rename your project`}</DialogTitle>
              <DialogContent>
                <TextField margin="dense" id="name" label="New project name" fullWidth 
                  onChange = {this.renameInput('name')} />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.renameDialogClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.renameConfirmed} color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>


            <Dialog open={this.state.settingDialog} onClose={this.settingDialogClose}>             
              <DialogTitle id="SDT">{`Edit Settings`} </DialogTitle> 
              <DialogContent>
                <TextField margin="dense" id="name" label="Action" fullWidth 
                   />
                <TextField margin="dense" id="name" label="Situation" fullWidth 
                  />
                <TextField margin="dense" id="name" label="Schedule" fullWidth 
                   />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={this.settingDialogClose} >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={this.settingDialogClose} >
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={this.state.deleteDialog} onClose={this.deleteDialogClose}>             
              <DialogTitle id="DDT">{`Are you sure want to delete this setting?`} </DialogTitle> 
              <DialogActions>
                <Button variant="contained" onClick={this.deleteDialogClose} >
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" onClick={this.confirmDelete} >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={this.state.deleteProjectDialog} onClose={this.deleteProjectDialogClose}>             
              <DialogTitle id="DPDT">{`Are you sure want to delete this project?`} </DialogTitle> 
              <DialogActions>
                <Button variant="contained" onClick={this.deleteProjectDialogClose} >
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" onClick={this.confirmDeleteProject} >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>

        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Project)