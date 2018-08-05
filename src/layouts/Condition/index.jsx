import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  onInitCondition,
  onAddCondition,
  onUpdateCondition,
  onDeleteCondition,
} from '../../actions/condition.js'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';

import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Snackbar from '@material-ui/core/Snackbar';

import CircularProgress from '@material-ui/core/CircularProgress';

import ConditionDialog from 'components/ConditionDialog';

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    justifyContent: 'center',
    marginBottom: '10px',
  },
  timePick: {
    width: 82,
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  listItem: {
    justifyContent: 'flex-start',
    display: 'flex',
  },
  
});

const theme = createMuiTheme({
  palette: {
    secondary: yellow
  },
});

const defaultCondition = {
  isOpen: true,
  name: '',
  schedule_from: false,
  startTime: '',
  endTime: '',
  schedule_last: false,
  duration: 10,
  unit: 'minute',
  rule: [{
    name: 'transportation',
  }]
};

class Condition extends React.Component {

  componentDidMount() {
    this.props.onInitCondition();
  }

  componentWillReceiveProps(nextProps) {
    let tmpList = _.cloneDeep(nextProps.conditionStore.dataList);
    let tmpState = _.cloneDeep(nextProps.conditionStore.dataState);
    this.setState({
      conditionList: tmpList,
      proccessingState: tmpState,
    });
    let tmpNameList = [];
    _.map(tmpList, (condition, index) => {
      tmpNameList[index] = condition.name;
    });
    this.setState({nameList: tmpNameList});
  }

  state = { 
    conditionList: [],
    isOpen: [],
    proccessingState: {},
    newDialogIsOpen: false,
    nameList: [],
  };

  // Handle the event of clicking the pencil icon. Open the dialog.
  handleEdit = (index) => {
    let ListCopy = _.cloneDeep(this.state.conditionList);
    ListCopy[index].isOpen = true;
    this.setState({conditionList: ListCopy});
  };

  // Handle the event of clicking the trash can icon. Remove the condtion.
  handleDelete = (index) => {
    this.props.onDeleteCondition(index, this.state.conditionList[index].name);
  };

  // Handle the event of clicking the '+Add' button. Insert new condition and open the dialog.
  handleAdd = () => {
    this.setState({newDialogIsOpen: true});
  };

  // Handle the event of cancel button. Close the dialog without update the database.
  handleCancel = (index) => {
    let ListCopy = _.cloneDeep(this.state.conditionList);
    ListCopy[index].isOpen = false;
    this.setState({conditionList: ListCopy});
  }

  // Handle the event of save button. Cloase the dialog and update the database.
  handleSave = (index, conObj, isAdd) => {

    let copyConObj = _.cloneDeep(conObj);
    // if the checkbox is unchecked, return empty string
    if(copyConObj.schedule_from === false){
      copyConObj.startTime = "";
      copyConObj.endTime = "";
    } 
    if (copyConObj.schedule_last === false){
      copyConObj.duration = null;
      copyConObj.unit = "";
    }

    // Close the dialog
    copyConObj.isOpen = false;

    // If the dialog is the add dialog, create new condition to server, else just update
    if(isAdd){
      this.props.onAddCondition(copyConObj);
    } else {
      this.props.onUpdateCondition(index, copyConObj, this.state.conditionList[index].name);
    }
    this.setState({newDialogIsOpen: false});
  }
  
  // Handle Error snackbar closing
  handleClose = () => {
    this.setState({
      proccessingState:{
        isLoading: false,
        isError: false,
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardHeader
            title="Condition"
          />
          <CardContent>
          <List>
            {
              _.map(this.state.conditionList, (condition, index) => 
              <ListItem 
                divider 
                disableGutters
                key={index}
              >
                <ListItemText primary={condition.name}/>
                <ListItemSecondaryAction>
                  <IconButton 
                    onClick={(e) => this.handleEdit(index)}
                    disabled={this.state.proccessingState.isLoading}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    onClick={(e) => this.handleDelete(index)}
                    disabled={this.state.proccessingState.isLoading}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                <ConditionDialog 
                  conIndex  = {index}
                  conObj    = {condition}
                  handleCancel = {this.handleCancel}
                  handleSave = {this.handleSave}
                  isOpen = {condition.isOpen}
                  isAdd = {false}
                  nameList = {this.state.nameList}
                />
              </ListItem>
              )
            }
            <ConditionDialog 
                  conIndex  = {this.state.conditionList.length}
                  conObj    = {defaultCondition}
                  handleCancel = {() => {this.setState({newDialogIsOpen: false})}}
                  handleSave = {this.handleSave}
                  isOpen = {this.state.newDialogIsOpen}
                  isAdd = {true}
                  nameList = {this.state.nameList}
            />
          </List>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button 
              variant="contained" 
              color="secondary" 
              className={classes.margin}
              onClick={this.handleAdd}
              disabled={this.state.proccessingState.isLoading}
            >
              + ADD
            </Button>
          </CardActions>
        </Card>
        <Snackbar
          className='proccessingBar'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={
            this.state.proccessingState.isLoading
          }
          autoHideDuration={6000}
          message={[
            <span className="messageid">
              Proccessing, please wait...
            </span>
          ]}
          action={[
            <CircularProgress className={classes.progress} size={15} color="secondary"/>
          ]}
        />
        <Snackbar
          className='errorBar'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onClose={this.handleClose}
          open={this.state.proccessingState.isError}
          autoHideDuration={6000}
          message={[
            <span className="messageid">
              Something Wrong, please try again
            </span>
          ]}
          action={[
            <ErrorIcon color="secondary" />
          ]}
        />
        </MuiThemeProvider>
      </div>
    );
  }
}

Condition.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({ 
  conditionStore: store.conditionData
});

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onInitCondition, onAddCondition, onUpdateCondition, onDeleteCondition }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Condition));