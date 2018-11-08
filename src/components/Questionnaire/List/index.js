

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShortTextIcon from "@material-ui/icons/ShortText";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import Entry from './Entry'

const styles = () => ({
  list: {
    minWidth: 280,
    backgroundColor: '#eeeeee',
    padding: '2rem',
    borderLeft: '4px solid #2196f3'
  }
})

const List = ({ classes }) => (
  <div className={classes.list}>
    <Typography color="textSecondary">
      Question List
    </Typography>
    <div>
      <Entry dragType="SHORT_TEXT" icon={<ShortTextIcon />}>Short Text</Entry>
      <Entry dragType="LONG_TEXT" icon={<FormatAlignLeftIcon />}>Long Text</Entry>
      <Entry dragType="MULTIPLE_CHOICE" icon={<CheckBoxIcon />}>Multiple Choice</Entry>
      <Entry dragType="MATRIX_QUESTIONS" icon={<RadioButtonCheckedIcon />}>Matrix Questions</Entry>
      <Entry dragType="STATEMENT" icon={<FormatQuoteIcon />}>Statement</Entry>
    </div>
  </div>
)


export default withStyles(styles)(List);