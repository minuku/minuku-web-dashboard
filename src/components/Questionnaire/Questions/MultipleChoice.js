import React from 'react'
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const styles = () => ({

})

const Option = ({ order }) => (
  <div className="mt-2">
    <label htmlFor="">{ order }</label>
    <span className="d-inline-block px-2" >
      <input type="text"/>
    </span>
  </div>
)

const MultipleChoice = () => (
  <div className="questi on d-flex mb-2">
    <div className="mt-1">
      <CheckBoxIcon />
      <RadioButtonCheckedIcon />
    </div>
    <div className="ml-2 col">
      <TextField placeholder="Multiple Cholice Question ..." fullWidth />
      <div className="my-3">
        <Option order="a"/>
        <Option order="b"/>
        <Option order="c"/>
        <Option order="d"/>
        <Option order="e"/>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(MultipleChoice)