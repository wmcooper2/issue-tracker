import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";
import { changeToIssues } from "../redux/actions";

const HomeButton = ({ homeClick }) => {
  return (
    <Link to="/" onClick={() => homeClick()}>
      <Fab size="small" aria-label="home">
        <HomeIcon />
      </Fab>
    </Link>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  homeClick: () => dispatch(changeToIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
