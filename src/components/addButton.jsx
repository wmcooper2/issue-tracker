import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

export const AddButton = () => {
  return (
    <Link to="/add-issue">
      <Fab size="small" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
};
