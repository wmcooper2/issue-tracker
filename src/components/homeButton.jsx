import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const HomeButton = () => {
  return (
    <Link to="/">
      <Fab size="small" aria-label="home">
        <HomeIcon />
      </Fab>
    </Link>
  );
};

export default HomeButton;
