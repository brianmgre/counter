import React from "react";
import { TextField, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const Count = props => {
  const { count, changeHandler, subtractFromCount, addToCount } = props;
  const { classes } = props;
  return (
    <div>
      <Icon onClick={addToCount}>add_circle_outline</Icon>
      <form>
        <Typography variant="title"># OF UNITS</Typography>
        <TextField name="count" value={count} onChange={changeHandler} />
      </form>
      <Icon onClick={subtractFromCount}>remove_circle_outline</Icon>
    </div>
  );
};

export default Count;
