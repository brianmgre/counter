import React from "react";
import { TextField, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { styles } from "./styles/containerStyles";
import { withStyles } from "@material-ui/core";

const Count = props => {
  const { count, changeHandler, subtractFromCount, addToCount } = props;

  const submitHandler = event => {
    event.preventDefault();
  };
  const { classes } = props;
  return (
    <div className={classes.formContainer}>
      <Typography variant="body1" className={classes.unitTitle}>
        # OF UNITS
      </Typography>
      <div className={classes.inputFormAddSub}>
        <Icon onClick={addToCount} className={classes.addSubtract}>
          add_circle_outline
        </Icon>
        <form
          onSubmit={submitHandler}
          type="submit"
          className={classes.unitForm}
        >
          <TextField
            id="outlined-bare"
            variant="outlined"
            name="count"
            value={count}
            onChange={changeHandler}
            className={classes.input}
            InputProps={{
              classes: {
                input: classes.resize,
                textAlign: "center"
              }
            }}
          />
        </form>
        <Icon onClick={subtractFromCount} className={classes.addSubtract}>
          remove_circle_outline
        </Icon>
      </div>
    </div>
  );
};

export default withStyles(styles)(Count);
