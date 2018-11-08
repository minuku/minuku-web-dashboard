
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames'

import TextField from "@material-ui/core/TextField";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import styles from './style'

const Option = ({ order }) => (
  <div className="mt-2">
    <label htmlFor="">{ order }</label>
    <span className="d-inline-block px-2" >
      <input type="text"/>
    </span>
  </div>
)

class MatrixQuestions extends React.Component {
  render(){
    const { order = 0, title, classes, required, onChange } = this.props
    const A = 65
    return (
      <div className="question d-flex">
        <div className="mt-1 d-flex">
          <RadioButtonCheckedIcon color="primary"/>
          <div
            className={classNames(classes.order, required && classes.required)}
            onClick={() => onChange({ required: !required })}
          >
            { String.fromCharCode(A + order) }
          </div>

        </div>
        <div className="ml-2 col">
          <TextField
            value={title || ''}
            placeholder="Matrix Questions ..."
            onChange={e => onChange({ title: e.target.value })}
            fullWidth
          />
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
  }
}
export default withStyles(styles)(MatrixQuestions)