import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

export const EditButton = () => {
  return (
    <Link to="/add-issue">
      <Fab size="small" aria-label="add">
        <EditIcon />
      </Fab>
    </Link>
  );
};
