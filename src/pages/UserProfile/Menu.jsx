import React from "react";
import { withStyles } from "@material-ui/core/styles";

import img from "./avatar.png";

const styles = {
  bar: {
    position: "fixed",
    right: '10%',
    top: 0,
    width: "25%",
    height: "100vh",
    display: "inline-block"
  },
  photo: {
    position: "relative",
    top: 64,
    height: "40%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    position: "relative",
    width: "100%",
    display: "block"
  },
  avatar: {
    height: "70%",
    width: "70%",
    borderRadius: "50%"
  },
  list: {
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
    listStyleType: "none",
    paddingTop: "10px"
  },
  item: {
    cursor: "pointer",
    textDecoration: "none",
    color: "black"
  },
  size: {
    fontSize: 20,
    margin: 10,
    "&:hover": {
      color: "grey"
    }
  }
};

class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bar}>
        <div className={classes.photo}>
          <img src={img} alt="This is an avatar" className={classes.avatar} />
        </div>
        <div className={classes.menu}>
          <ul className={classes.list}>
            <a href="#account" className={classes.item}>
              <li className={classes.size}>Account</li>
            </a>
            <a href="#preference" className={classes.item}>
              <li className={classes.size}>Preference</li>
            </a>
            <a href="#notification" className={classes.item}>
              <li className={classes.size}>Notification</li>
            </a>
            <a href="#localization" className={classes.item}>
              <li className={classes.size}>Localization</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
