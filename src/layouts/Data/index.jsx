import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SectionHeader from "components/Header/SectionHeader";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import { mobileLabelData } from "./labelFormat.js";
import { DataSectionLabelCard } from "components/Card";
import Dialog from "components/Dialog";
import DataCollectionElm from "components/Dialog/DataCollectionElm";

import _ from "lodash";
let url = `https://minukutest.nctu.me/minukutest`;

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
  sectionList: {
    padding: 20
  },
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
  },
  addSectionWrapper: {
    marginTop: 100
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class DataSection extends React.Component {
  state = {
    list: [],
    dataCollectionTitle: ``,
    dataCollectionCategory: ``,
    sectionId: 0,
    elementType: `collection`,
    isDialogShow: false
  };
  addCard = (sectionId, title) => {
    let list = this.state.list;
    list[sectionId].content.push({
      cardTitle: title,
      type: this.state.dataCollectionCategory
    });
    this.setState({ list });
  };

  deleteCard = (sectionId, cardId) => {
    let list = this.state.list;
    list[sectionId].content.splice(cardId, 1);
    this.setState({ list });
  };

  addCollection = title => {
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "datacollectionName": title }),
      method: "POST",
    })
    .then(res => console.log(res))
    .catch(err => console.log("error", err))
  };

  deleteCollection = collectionId => {
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/datacollection1?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
    .then(res => console.log(res))
    .catch(err => console.log("error", err))
  };

  toggleDialog = (id = null, elementType = `collection`) => {
    this.setState({
      sectionId: id,
      elementType: elementType,
      isDialogShow: !this.state.isDialogShow
    });
  };

  createElement = () => {
    this.state.elementType === `collection`
      ? this.addCollection(this.state.dataCollectionTitle)
      : this.addCard(this.state.sectionId, this.state.dataCollectionTitle);
    this.setState({ dataCollectionTitle: ``, dataCollectionCategory: `` });
    this.toggleDialog();
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount () {
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
    })
    .then(res => res.json())
    .then(res => {
      let list = []
      res.forEach((collection) => list.push({
        title: collection,
        type: `dataCollection`,
        content: []
      }))
      this.setState({ list })
    })
    .catch(err => {
      console.log("error", err)
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SectionHeader title={`Data Section 專案資料設定`} />

        <div className={classes.sectionList}>
          {_.map(this.state.list, (section, sid) => (
            <div className={classes.section} key={sid}>
              <Grid
                container
                className={classes.sectionTitle}
                justify="flex-start"
                alignItems="center"
                pacing={4}
              >
                <Button className={classes.labelBtn}>{section.type}</Button>
                <Typography variant="headline">{section.title}</Typography>
                <IconButton onClick={() => this.deleteCollection(sid)}>
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
                {_.map(section.content, (card, cid) => (
                  <Grid key={cid} item>
                    <DataSectionLabelCard
                      data={mobileLabelData}
                      deleteCard={() => this.deleteCard(sid, cid)}
                      cardTitle={card.cardTitle}
                      cardType={card.type}
                    />
                  </Grid>
                ))}
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.addCardButton}
                    onClick={() => this.toggleDialog(sid, `card`)}
                  >
                    <AddIcon className={classes.addButtonIcon} />
                    Device
                  </Button>
                </Grid>
              </Grid>
            </div>
          ))}

          <Grid
            container
            justify={"center"}
            className={classes.addSectionWrapper}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.addSectionButton}
              onClick={() => this.toggleDialog(`collection`)}
            >
              <AddIcon className={classes.addButtonIcon} />
              add collection
            </Button>
          </Grid>
        </div>

        <Dialog
          isOpen={this.state.isDialogShow}
          title={`New ${this.state.elementType} Setting`}
          content={
            <DataCollectionElm
              dataCollectionTitle={this.state.dataCollectionTitle}
              dataCollectionCategory={this.state.dataCollectionCategory}
              type={this.state.elementType}
              handleChange={this.handleChange}
            />
          }
          handleSubmit={this.createElement}
          handleClose={this.toggleDialog}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DataSection);
