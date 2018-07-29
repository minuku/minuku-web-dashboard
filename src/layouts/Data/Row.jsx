import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import { DataSectionLabelCard } from "components/Card";
import { mobileLabelData } from "./labelFormat.js";

import _ from "lodash";
let url = `https://minukutest.nctu.me/minukutest`;

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
    let name = this.props.section.title
    let token = localStorage.getItem(`token`)

    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}/device/${deviceName}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "deviceContent": data
      }),
      method: "PUT",
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log("error", err)
    })
  }

  deleteCard = (deviceName) => {
    console.log(`row: delete`)
    let name = this.props.section.title
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}/device/${deviceName}?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log("error", err)
    })
  };

  deleteDatacollection = title => {
    this.props.deleteDatacollection(title)
  };

  componentDidMount () {
    this.getAllDevice()
  }

  componentWillReceiveProps = nextProps => {
    console.log(`here`);
  }

  getAllDevice = () => {
    let name = this.props.section.title
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}?token=${token}`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (res) {
        this.setState({
          sectionType: res.datacollectionType,
          data: res.devices
        })
      } else {
        // if 空的array
      }
    })
    .catch(err => {
      console.log("error", err)
    })
  }
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
          <Button className={classes.labelBtn}>{this.state.sectionType}</Button>
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
          {_.map(this.state.data, (card, cid) => (
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
