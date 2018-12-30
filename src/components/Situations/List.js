import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";

const styles = theme => ({});

const SituationsList = ({
  situations,
  deleteSituation,
  projectName,
  ...rest
}) => (
  <List component="nav" disablePadding>
    {situations && situations.length ? (
      situations.map(situation => (
        <ListItem
          key={situation.situationName}
          deleteSituation={deleteSituation}
          projectName={projectName}
          {...situation}
          {...rest}
        />
      ))
    ) : (
      <div className="text-center">
        No situations, click '+' button to create one.
      </div>
    )}
  </List>
);

export default withStyles(styles)(SituationsList);
