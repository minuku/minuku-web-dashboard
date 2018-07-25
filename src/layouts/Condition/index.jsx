import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  onInitCondition,
} from '../../actions/condition.js'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';

import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

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
  dialog: {
    //width: '600px',
  }
});

const theme = createMuiTheme({
  palette: {
    secondary: yellow
  },
});

const defaultStart = new Date(2018, 11, 24, 10, 33, 30, 0);
const defaultEnd = new Date(2018, 11, 24, 12, 33, 30, 0);

class Condition extends React.Component {

  componentDidMount() {
    this.props.onInitCondition();
    console.log(this.props.conditionList);
  }

  state = { 
    conditionList: this.props.conditionList,
  };

  handleEdit = (index) => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = true;
    this.setState({conditionList: tmp});
  };

  handleDelete = (index) => {
    let tmp = this.state.conditionList;
    tmp.splice(index, 1);
    this.setState({conditionList: tmp});

  };

  handleAdd = () => {
    let tmp = this.state.conditionList;
    tmp.push({
      isOpen: true,
      name: '新的情境',
      schedule_from: false,
      startTime: defaultStart,
      endTime: defaultEnd,
      schedule_last: false,
      duration: 10,
      unit: 'minute',
      rule: [],
    });
    this.setState({conditionList: tmp});
    };
  
  changeTestName = (text) => {
    this.setState({testName: text});
  }

  handleClose = (index) => {
    let tmp = this.state.conditionList;
    tmp[index].isOpen = false;
    this.setState({conditionList: tmp});
  };

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
              <ListItem divider disableGutters>
                <ListItemText primary={condition.name}/>
                <ListItemSecondaryAction>
                  <IconButton onClick={(e) => this.handleEdit(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={(e) => this.handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                <ConditionDialog 
                  conIndex  = {index}
                  conObj    = {condition}
                  handleClose = {() => this.handleClose(index)}
                  isOpen = {condition.isOpen}
                />
              </ListItem>
              )
            }
          </List>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button 
              variant="contained" 
              color="secondary" 
              className={classes.margin}
              onClick={this.handleAdd}
            >
              + ADD
            </Button>
          </CardActions>
        </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

Condition.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({ 
  conditionList: store.conditionReducer
});

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onInitCondition }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Condition));