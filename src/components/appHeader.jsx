import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ProjectSelection from "./projectSelection";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeButton from "./homeButton";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  header: {
    backgroundColor: "seagreen",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const AppHeader = (props) => {
  const styles = customStyles();
  return (
    <AppBar position="relative" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <HomeButton></HomeButton>
        <Typography variant="h2">Issue Tracker</Typography>
        <ProjectSelection></ProjectSelection>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
