import React from "react";
import { Typography } from "@material-ui/core";
import { styles } from "./styles/containerStyles";
import { withStyles } from "@material-ui/core";

const Cost = props => {
  const { classes, title, cost } = props;
  return (
    <div className={classes.costContainer}>
      <Typography variant="body1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.cost}>
        ${cost}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Cost);
