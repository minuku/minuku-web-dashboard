import React from "react";
import classNames from "classnames";
import { DragSource } from "react-dnd";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  entry: {
    borderRadius: 4,
    border: "1px solid white",
    fontWeight: "bold",
    color: "#2196f3",
    backgroundColor: "#ffffff",
    "& .icon": {
      width: 30,
      textAlign: "center"
    },
    "& .text": {
      verticalAlign: 6
    }
  },
  isDragging: {
    border: `1px solid ${theme.palette.primary.main}`
  }
});

const Entry = ({ icon, children, classes, connectDragSource, isDragging }) =>
  connectDragSource(
    <div
      className={classNames(
        "my-2 pb-1 pt-2 px-3",
        classes.entry,
        isDragging && classes.isDragging
      )}
    >
      <span className="icon">{icon}</span>
      <span className="text px-2">{children}</span>
    </div>
  );

const type = "QUESTION";
const spec = {
  beginDrag(props) {
    return { type: props.dragType };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource(type, spec, collect)(withStyles(styles)(Entry));
