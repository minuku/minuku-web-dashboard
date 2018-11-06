
import React from 'react'
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const styles = () => ({

})

const LongText = () => (
  <div className="question d-flex">
    <div className="mt-1">
      <CheckBoxIcon />
      <RadioButtonCheckedIcon />
    </div>
    <div className="ml-2 col">
      <TextField placeholder="Long Text Question ..." fullWidth />
      <div className="my-3">
        <textarea className="w-100" rows={5}></textarea>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(LongText)