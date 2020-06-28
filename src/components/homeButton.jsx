import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";
import { changeToIssues, updateIssues } from "../redux/actions";
import { ISSUES_URL } from "../utilities/constants";

const HomeButton = ({ homeClick, project }) => {
  return (
    <Link to="/" onClick={() => homeClick(project)}>
      <Fab size="small" aria-label="home">
        <HomeIcon />
      </Fab>
    </Link>
  );
};

const mapStateToProps = ({ project }) => ({
  project,
});

const mapDispatchToProps = (dispatch) => ({
  homeClick: (project) => {
    dispatch(changeToIssues())
    fetch(`${ISSUES_URL}/${project}`)
      .then((response) => response.json())
      .then((results) => dispatch(updateIssues(results)))
      .catch((error) => console.error(error))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
