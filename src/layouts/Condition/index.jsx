import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';

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
const optionMenu = ['weak light', 'lower noise', 'battery', 'speed', 'GPS', 'location'];
const fromObj = {
  startHr: 8,
  startMin: 30,
  startM: 'AM',
  endHr: 10,
  endMin: 30,
  endM: 'PM',
}
const lastObj = {
  duration: 10,
  unit: 'minute'
}
const conditionObj = {
  name: 'Condition',
  schedule_from: fromObj,
  schedule_last: lastObj,
  rule: [],
}
const defaultCondition = [conditionObj]

class Condition extends React.Component {

  state = { 
    conditionList: defaultCondition.map(c => (
      
    )),
  };

  handleClickOpen = () => {
    this.setState({ open: true });
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
            {this.state.conditionList.map(condition => (
              <ListItem divider disableGutters>
                <ListItemText primary={condition}/>
                <ListItemSecondaryAction>
                  <IconButton onClick={this.handleClickOpen}>
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button 
              variant="contained" 
              color="secondary" 
              className={classes.margin}
              onClick={this.handleClickOpen}
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