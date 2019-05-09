import React from "react";

import CounterContainer from "./components/counterContainer";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core";
import { styles } from "./components/styles/containerStyles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: "#E0F4F4"
    },
    primary: {
      main: "#2B3636"
    }
  }
});

const App = props => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CounterContainer />
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
