
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames'

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import sharedStyles from './style'

const A = 65
const a = 97

const styles = theme => ({
  leftIcon: {
    fontSize: 20
  },
})

const combinedStyles = theme => ({
  ...sharedStyles(theme),
  ...styles(theme)
})

const Option = ({ order, value, onChange }) => (
  <div className="mt-2">
    <label htmlFor="">{ String.fromCharCode(a + order) }</label>
    <span className="d-inline-block px-2" >
      <input
        type="text"
        value={value}
        placeholder={`option ${String.fromCharCode(a + order)}`}
        onChange={onChange}
      />
    </span>
  </div>
)

class MultipleChoice extends React.Component {
  render(){
    const { order = 0, title, classes, required, onChange, options } = this.props
    const updateOptions = (index, value) => {
      const newOptions = options ? [ ...options ] : []
      newOptions[index] = value
      onChange({ options: newOptions})
    }
    return (
      <div className="question d-flex">
        <div className="mt-1 d-flex">
          <CheckBoxIcon color="primary"/>
          <div
            className={classNames(classes.order, required && classes.required)}
            onClick={() => onChange({ required: !required })}
          >
            { String.fromCharCode(A + order) }
          </div>
          <DeleteIcon
            className={classes.delete}
            onClick={() => onChange(null)}
          />

        </div>
        <div className="ml-2 col">
          <TextField
            value={title || ''}
            placeholder="Multiple Choice Question ..."
            onChange={e => onChange({ title: e.target.value })}
            fullWidth
          />
          <div className="my-3">
            {
              options && options.length
              ? options.map((option, order) =>
                  <Option
                    key={order}
                    order={order}
                    value={option.value}
                    onChange={e => updateOptions(order, e.target.value)}
                  />
                )
              : null
            }
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="mt-2"
              onClick={e => updateOptions(options ? options.length : 0 ,'')}
            >
              <AddIcon className={classes.leftIcon}/> Add Options
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(combinedStyles)(MultipleChoice)