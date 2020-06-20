import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  btnStyle: {
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
  },
});

export const EditButton = () => {
  // const styles = customStyles();
  return (
    // <Link to="/add-issue" className={styles.btnStyle}>
    <Link to="/add-issue">
      <Fab size="small" aria-label="add">
        <EditIcon />
      </Fab>
    </Link>
  );
};
