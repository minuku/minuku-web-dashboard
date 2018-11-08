
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames'

import TextField from "@material-ui/core/TextField";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AddIcon from "@material-ui/icons/Add";

import sharedStyles from './style'

const A = 65
const a = 97

const styles = theme => ({
  add: {
    border: `4px ${theme.palette.primary.main} dotted`,
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.primary.main
  }
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
            <div
              className={`mt-2 ${classes.add}`}
              onClick={e => updateOptions(options ? options.length : 0 ,'')}
            >
              <AddIcon />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(combinedStyles)(MultipleChoice)