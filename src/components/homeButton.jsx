import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";
import { changeToIssues, updateIssues } from "../redux/actions";
import { ISSUES_URL } from "../utilities/constants";

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
  homeClick: () => {
    dispatch(changeToIssues())
    fetch(ISSUES_URL)
      .then((response) => response.json())
      .then((results) => dispatch(updateIssues(results)))
      .catch((error) => console.error(error))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
