
import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames'

import TextField from "@material-ui/core/TextField";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import styles from './style'

class Statement extends React.Component {
  render(){
    const { order = 0, title, classes, required, onChange } = this.props
    const A = 65
    return (
      <div className="question d-flex">
        <div className="mt-1 d-flex">
          <FormatQuoteIcon color="primary"/>
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
            placeholder="Statement Question ..."
            onChange={e => onChange({ title: e.target.value })}
            fullWidth
          />
          <div className="my-3">
            <textarea
              className="w-100"
              placeholder="Answer..."
              rows={5}
            ></textarea>
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Statement)