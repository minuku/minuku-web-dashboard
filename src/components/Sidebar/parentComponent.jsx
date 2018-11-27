import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ChildrenComponent from './childrenComponent'

class ParentComponent extends Component {

  state = {
    open: false,
    description: {
      title: '',
      id: ''
    },
    items:[]
  }

  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = title => ({ target: { value } }) => {
    const{ description } = this.state;
    this.setState({ 
      description: {
        ...description,
        [title]: value
      }
    })
  }

  handleSubmit = () => {
    const{ description, items } = this.state;
    items.push({ 
      name: description.title,
      id: description.title
    });
    this.setState({ 
      open: false,
      description: {
        title: ''
      }
     });
  }

  handleDelete = (id) => {
    this.setState(({items})=>({
      items: items.filter(ex => ex.id !== id),
    }))
  }

  render(){

    const { open,  description: { title, id }, items } = this.state;
    const { toggleList,  listopen} = this.props;

    return(
      <div className="card calculator">
        <ListItem button component={NavLink} to="/dashboard/project">
          <ListItemIcon>
            <LinearScaleIcon />
          </ListItemIcon>
          <ListItemText primary="Project List" />
          <Typography color="textSecondary">
            <AddIcon
              onClick={this.handleToggle} 
              color="primary"
              />
            <Dialog
              open={open}
              onClose={this.handleToggle}
              aria-labelledby="form-dialog-title"
            >    
              <DialogTitle id="form-dialog-title">
                Create a new project
              </DialogTitle>
              <DialogContent>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange('title')}
                  margin="normal"
                />
              </DialogContent>
              <DialogActions>
                <Button 
                  color="primary" 
                  variant="raised"
                  onClick={this.handleSubmit}  
                  autoFocus
                  >
                  Create
                </Button>
              </DialogActions>
            </Dialog>
            <span onClick={toggleList}>
              {
                listopen
                ? <ExpandLessIcon />
                : <ExpandMoreIcon />
              }
            </span>
          </Typography> 
        </ListItem>
        {
          listopen && items && items.length
          ? items.map((item, id) => <ChildrenComponent onDelete={this.handleDelete} {...item} key={id} />)
          : null
        }
      </div>
    )
  }
}

export default ParentComponent;