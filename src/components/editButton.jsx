import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { EDIT_ISSUE_ENDPOINT } from "../utilities/constants";

export const EditButton = () => {
  return (
    <Link to={EDIT_ISSUE_ENDPOINT}>
      <Fab size="small" aria-label="add">
        <EditIcon />
      </Fab>
    </Link>
  );
};
