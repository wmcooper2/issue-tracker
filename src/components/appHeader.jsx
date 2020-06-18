import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeButton from "./homeButton";

const AppHeader = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <HomeButton></HomeButton>
        <Typography variant="h2">Issue Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
