import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { toggleBugs } from "../redux/actions";
// import { BUG_GRADIENT, BUGS_URL, BUGS_ENDPOINT } from "../utilities/constants";
// import { BUGS_URL, BUGS_ENDPOINT } from "../utilities/constants";
// import { BUGS_ENDPOINT } from "../utilities/constants";
import { updateIssues } from "../redux/actions";
// bugButton: { background: BUG_GRADIENT },
const customStyles = makeStyles({
    linkStyle: {
        background: "linear-gradient(300deg, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.9) 100%)",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "black",
        cursor: "pointer",
        textDecoration: "none",
    },
});

// to={BUGS_ENDPOINT}
const BugButton = ({ bugClick, project }) => {
    const classes = customStyles();
    return (
        <Button className={classes.linkStyle}
                onClick={() => bugClick(project)}
        >
                Bug
        </Button>
    );
};


const mapStateToProps = ({ project }) => ({
    project,
});

// fetch(`${BUGS_URL}/${project}`)
// const mapDispatchToProps = (dispatch) => ({
    // bugClick: (project) => {
        // dispatch(toggleBugs());
        // fetch(`${"/issue-tracker/bugs"}/${project}`)
            // .then((response) => response.json())
            // .then((results) => dispatch(updateIssues(results)))
            // .catch((error) => console.error(error));
    // },
// });

// fetch(`${BUGS_URL}/${project}`)
const mapDispatchToProps = (dispatch) => ({
    bugClick: (project) => {
        dispatch(toggleBugs());
    },
});


BugButton.propTypes = {
    bugClick: PropTypes.func,
    project: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BugButton);
