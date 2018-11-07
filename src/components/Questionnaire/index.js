
import React, { Component } from "react";

import * as Questions from './Questions'
import Body from './Body'
import List from './List'
import { withStyles } from "@material-ui/core/styles";
// import { consolidateStreamedStyles } from "styled-components";

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
    }
  }
})

class Questionnaire extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.card}>
        <div>
          <Body>
            <Questions.ShortText />
            <Questions.LongText />
            <Questions.MultipleChoice />
            <Questions.MatrixQuestions />
            <Questions.Statement />
          </Body>
        </div>
      <div className="pt-4">
        <List/>
      </div>
    </div>
    )
  }
  
}
 


export default withStyles(styles)(Questionnaire);