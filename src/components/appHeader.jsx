import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppHeader = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h2">Issue Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
