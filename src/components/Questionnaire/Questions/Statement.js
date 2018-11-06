
import React from 'react'
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const styles = () => ({

})

const Statement = () => (
  <div className="question d-flex">
    <div className="mt-1">
      <CheckBoxIcon />
      <RadioButtonCheckedIcon />
    </div>
    <div className="ml-2 col">
      <TextField placeholder="Statement Question ..." fullWidth />
      <div>
        <label htmlFor=""></label>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(Statement)