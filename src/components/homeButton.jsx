import React from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeToIssues, updateIssues } from "../redux/actions";
import { ISSUES_URL } from "../utilities/constants";
import { Link } from "react-router-dom";

// const HomeButton = ({ homeClick, project }) => {
const HomeButton = ({ homeClick }) => {
    return (
        // <Link to="/" onClick={() => homeClick(project)}>
        <Link to="/" onClick={() => homeClick()}>
            <Fab size="small" aria-label="home">
                <HomeIcon />
            </Fab>
        </Link>
    );
};

// const mapStateToProps = ({ project }) => ({
const mapStateToProps = () => ({
    // project,
});

const mapDispatchToProps = (dispatch) => ({
    // homeClick: (project) => {
    homeClick: () => {
        dispatch(changeToIssues());
        // fetch(`${ISSUES_URL}/${project}`)
        fetch(ISSUES_URL)
            .then((response) => response.json())
            .then((results) => dispatch(updateIssues(results)))
            .catch((error) => console.error(error));
    }

});

HomeButton.propTypes = {
    homeClick: PropTypes.func,
    // project: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
