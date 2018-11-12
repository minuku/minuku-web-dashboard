import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import sharedStyles from "./style";

const A = 65;
const a = 97;

const styles = theme => ({
  leftIcon: {
    fontSize: 20
  }
});

const combinedStyles = theme => ({
  ...sharedStyles(theme),
  ...styles(theme)
});

const Option = ({ order, value, onChange }) => (
  <div className="mt-2">
    <label htmlFor="">{String.fromCharCode(a + order)}</label>
    <span className="d-inline-block px-2">
      <input
        type="text"
        value={value}
        placeholder={`option ${String.fromCharCode(a + order)}`}
        onChange={onChange}
      />
    </span>
  </div>
);

const Level = ({ order, value, onChange }) => (
  <div className="mt-2">
    <label htmlFor="">{1 + order}.</label>
    <span className="d-inline-block px-2">
      <input
        type="text"
        value={value}
        placeholder={`level ${1 + order}`}
        onChange={onChange}
      />
    </span>
  </div>
);

class MatrixQuestions extends React.Component {
  render() {
    const {
      order = 0,
      title,
      classes,
      required,
      onChange,
      options,
      levels
    } = this.props;
    const updateOptions = (index, value) => {
      const newOptions = options ? [...options] : [];
      newOptions[index] = value;
      onChange({ options: newOptions });
    };
    const updateLevels = (index, value) => {
      const newLevels = levels ? [...levels] : [];
      newLevels[index] = value;
      onChange({ levels: newLevels });
    };
    return (
      <div className="question d-flex">
        <div className="mt-1 d-flex">
          <RadioButtonCheckedIcon color="primary" />
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
            placeholder="Matrix Questions ..."
            onChange={e => onChange({ title: e.target.value })}
            fullWidth
          />
          <div className="row my-3 px-0">
            <div className="col-6">
              {options && options.length
                ? options.map((option, order) => (
                    <Option
                      key={order}
                      order={order}
                      value={option.value}
                      onChange={e => updateOptions(order, e.target.value)}
                    />
                  ))
                : null}
            </div>
            <div className="col-6">
              {levels && levels.length
                ? levels.map((level, order) => (
                    <Level
                      key={order}
                      order={order}
                      value={level.value}
                      onChange={e => updateLevels(order, e.target.value)}
                    />
                  ))
                : null}
            </div>
            <div className="col-12">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="mt-2 mr-2"
                onClick={e => updateOptions(options ? options.length : 0, "")}
              >
                <AddIcon className={classes.leftIcon} /> Add Options
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="mt-2"
                onClick={e => updateLevels(levels ? levels.length : 0, "")}
              >
                <AddIcon className={classes.leftIcon} /> Add Levels
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(combinedStyles)(MatrixQuestions);
