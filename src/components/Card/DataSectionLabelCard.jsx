import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
// import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "components/Dialog";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { MenuIcon } from "components/ActionIcon";
import _ from "lodash";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: `100%`,
    zIndex: 1,
    overflow: "scroll",
    position: "relative",
    display: "flex",
    flexDirection: `column`
  },
  sectionActionBtn: {
    width: 36,
    height: 36
  },
  paper: {
    height: 200,
    width: 360
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  header: {
    padding: `12px 20px`,
    display: `flex`,
    alignItems: `center`
  },
  labelBtn: {
    minHeight: 24,
    padding: `4px 16px 2px`,
    marginRight: 8,
    backgroundColor: `rgba(100, 100, 100, 0.25)`,
    color: `rgba(100, 100, 100, 0.95)`
  },
  formControl: {
    width: `25%`,
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.down("sm")]: {
      width: `100%`
    },
    [theme.breakpoints.down("md")]: {
      width: `40%`
    }
  },
  modalContent: {
    display: `flex`,
    flexWrap: `wrap`
  }
});

class DataSectionDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelCounter: 0,
      open: false,
      _labelingData: null,
      menuActions: [
        {
          name: "edit",
          function: this.toggleModal
        },
        {
          name: "delete",
          function: this.props.deleteCard
        }
      ]
    };
  }
  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleChange = ({ sectionId, labelId }) => event => {
    let _labelingData = this.state._labelingData;
    let labelCounter = this.state.labelCounter;

    labelCounter += _labelingData[sectionId][labelId][`active`] ? -1 : 1;
    _labelingData[sectionId][labelId][`active`] = !_labelingData[sectionId][
      labelId
    ][`active`];
    this.setState({ _labelingData, labelCounter });
  };

  componentDidMount() {
    let _labelingData = {};
    _.map(this.props.data, (sec, secId) => {
      _labelingData[secId] = {};
      _.map(sec, (type, id) => {
        _labelingData[secId][id] = {
          active: false,
          value: null,
          type: type
        };
      });
    });
    this.setState({ _labelingData: _labelingData });
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.paper}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.cardType.slice(0, 1)}
            </Avatar>
          }
          action={<MenuIcon list={this.state.menuActions} />}
          title={`${this.props.cardTitle} / ${this.props.cardType}`}
          subheader={`${this.state.labelCounter} label selected`}
        />
        <Divider light />

        <Dialog
          isOpen={this.state.open}
          title={`Label Selection`}
          content={_.map(this.state._labelingData, (section, sectionId) => (
            <FormControl
              key={sectionId}
              component="fieldset"
              className={classes.formControl}
            >
              <FormLabel component="legend">{sectionId}</FormLabel>
              <FormGroup>
                {_.map(section, (label, labelId) => (
                  <FormControlLabel
                    key={labelId}
                    control={
                      <Checkbox
                        checked={label.active}
                        onChange={this.handleChange({ sectionId, labelId })}
                        value={labelId}
                      />
                    }
                    label={labelId}
                  />
                ))}
              </FormGroup>
            </FormControl>
          ))}
          handleSubmit={this.toggleModal}
          handleClose={this.toggleModal}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(DataSectionDialog);
