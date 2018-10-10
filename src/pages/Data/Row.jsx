import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import { DataSectionLabelCard } from "components/Card";
import { mobileLabelData } from "constants";

import _ from "lodash";

const styles = theme => ({
  section: {
    marginBottom: 32
  },
  sectionTitle: {
    marginBottom: 8
  },
  sectionContent: {
    overflowX: "scroll",
    alignItems: "center"
  },
  labelBtn: {
    minHeight: 24,
    padding: `4px 16px 2px`,
    marginRight: 8,
    backgroundColor: `rgba(100, 100, 100, 0.25)`,
    color: `rgba(100, 100, 100, 0.95)`
  },
  addCardButton: {
    height: 36,
    backgroundColor: theme.palette.secondary.main,
    margin: `0 16px`,
    padding: `4px 16px`
  }
});

class DataRow extends React.Component {
  state = {
    list: [],
    dataCollectionTitle: ``,
    dataCollectionCategory: ``,
    sectionId: 0,
    elementType: `collection`,

    sectionType: ``,
    data: []
  };
  updateCard = (deviceName, data) => {
    let name = this.props.section.title;
    this.props.updateDevice(name, deviceName, data);
  };

  deleteCard = deviceName => {
    let collectionName = this.props.section.title;
    this.props.deleteDevice(collectionName, deviceName);
  };

  deleteDatacollection = title => {
    this.props.deleteDatacollection(title);
  };

  componentDidMount() {
    this.getAllDevice();
  }

  componentWillReceiveProps = nextProps => {};

  getAllDevice = () => {};
  render() {
    const { classes, section } = this.props;
    return (
      <div className={classes.section}>
        <Grid
          container
          className={classes.sectionTitle}
          justify="flex-start"
          alignItems="center"
          pacing={4}
        >
          <Button className={classes.labelBtn}>{`Data Collection`}</Button>
          <Typography variant="headline">{section.title}</Typography>
          <IconButton onClick={() => this.deleteDatacollection(section.title)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          spacing={16}
          wrap="nowrap"
          justify="flex-start"
          className={classes.sectionContent}
        >
          {_.map(section.content.devices, (card, cid) => (
            <Grid key={cid} item>
              <DataSectionLabelCard
                data={card.deviceContent}
                defaultData={mobileLabelData}
                updateCard={this.updateCard}
                deleteCard={() => this.deleteCard(card.deviceName)}
                cardTitle={card.deviceName}
                cardType={card.deviceType}
              />
            </Grid>
          ))}
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.addCardButton}
              onClick={() => this.props.toggleDialog(section.title, `card`)}
            >
              <AddIcon className={classes.addButtonIcon} />
              Device
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DataRow);
