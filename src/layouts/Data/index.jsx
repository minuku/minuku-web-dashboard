import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SectionHeader from "components/Header/SectionHeader";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import DataRow from './Row.jsx';
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
  addSectionWrapper: {
    marginTop: 100
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
  addCard = (name) => {
    let token = localStorage.getItem(`token`)
    fetch(`${url}/project/project1/situation/situation1/datacollection/${name}/device?token=${token}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "deviceName": this.state.dataCollectionTitle,
        "deviceType": this.state.dataCollectionCategory,
        "deviceContent": []
      }),
      method: "POST",
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => {
      console.log("error", err)
    })
  };

  deleteCard = (sectionId, cardId) => {
    let list = this.state.list;
    list[sectionId].content.splice(cardId, 1);
    this.setState({ list });
  };

  createElement = () => {
    this.state.elementType === `collection`
      ? this.addCollection(this.state.dataCollectionTitle)
      : this.addCard(this.state.dataSectionTitle);
    this.setState({ dataCollectionTitle: ``, dataCollectionCategory: `` });
    this.toggleDialog();
  };

  toggleDialog = (title = null, elementType = `collection`) => {
    this.setState({
      dataSectionTitle: title,
      elementType: elementType,
      isDialogShow: !this.state.isDialogShow
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  getcollection = () => {
    this.props.getDatacollections()
  }

  addCollection = title => {
    this.props.addDatacollection({
      title: title,
      dataCollectionCategory: this.state.dataCollectionCategory
    })
  };

  deleteCollection = title => {
    this.props.deleteDatacollection(title)
  };

  componentDidMount () {
    this.getcollection()
  }

  componentWillReceiveProps = nextProps => {
    let _data = nextProps.data, list = []
    if (_data) {
      _.map(_data, (collection, id) => {
        list.push({
          title: collection,
          type: ``,
          content: []
        })
      })
      this.setState({ list })
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SectionHeader title={`Data Section 專案資料設定`} />

        <div className={classes.sectionList}>
          {_.map(this.state.list, (section, sid) => (
            <DataRow
              key={sid}
              rowId={sid}
              section={section}
              toggleDialog={this.toggleDialog}
              addDatacollection={this.addCollection}
              deleteDatacollection={this.deleteCollection}
            />
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
