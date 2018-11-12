import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import TextField from "@material-ui/core/TextField";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./style";

class LongText extends React.Component {
  render() {
    const { order = 0, title, classes, required, onChange } = this.props;
    const A = 65;
    return (
      <div className="question d-flex">
        <div className="mt-1 d-flex">
          <FormatAlignLeftIcon color="primary" />
          <div
            className={classNames(classes.order, required && classes.required)}
            onClick={() => onChange({ required: !required })}
          >
            {String.fromCharCode(A + order)}
          </div>
          <DeleteIcon
            className={classes.delete}
            onClick={() => onChange(null)}
          />
        </div>
        <div className="ml-2 col">
          <TextField
            value={title || ""}
            placeholder="Long Text Question ..."
            onChange={e => onChange({ title: e.target.value })}
            fullWidth
          />
          <div className="my-3">
            <textarea className="w-100" rows={5} disabled />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(LongText);
