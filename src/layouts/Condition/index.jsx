import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import _ from 'lodash';
import DeleteIcon from '@material-ui/icons/Delete'
import ConditionDialog from 'components/ConditionDialog'

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: yellow
  },
});

const conditionMenu = ['Moving', 'Riding bike', 'Static'];

class Condition extends React.Component {

  state = { 
    conditionList: [
      {
        isOpen: false,
        name: '移動中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [],
      },
      {
        isOpen: false,
        name: '騎腳踏中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [],
      },
      {
        isOpen: false,
        name: '靜止中',
        schedule_from: false,
        startHr: 8,
        startMin: 30,
        startM: 'AM',
        endHr: 10,
        endMin: 30,
        endM: 'PM',
        schedule_last: false,
        duration: 10,
        unit: 'minute',
        rule: [],
      },
    ],
  };

  handleEdit = (index) => {
    this.state.conditionList[index].isOpen = true
  };

  handleDelete = (name) => {
    console.log('Delete' + name);
  };

  handleAdd = () => {
    console.log('Add');
  };

  handleClose = () => {
    this.setState({ open: false });
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
                  contentObj = {condition}
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

export default withStyles(styles)(Condition);