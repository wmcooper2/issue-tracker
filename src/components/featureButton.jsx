import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { toggleFeatures } from "../redux/actions";

const customStyles = makeStyles({
    featureButton: { background: "linear-gradient(300deg, rgba(128,0,128,0.6) 0%, rgba(128,0,128,0.9) 100%)"},
    linkStyle: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "black",
        cursor: "pointer",
        textDecoration: "none",
    },
});

const FeatureButton = ({ featureClick, project }) => {
    const classes = customStyles();
    return (
        <Button className={classes.featureButton}
                // to={"/features"}
                onClick={() => featureClick(project)}>
                Feature

{/* 

            <Link
                to={"/features"}
                className={classes.linkStyle}
                onClick={() => featureClick(project)}>
                Feature
            </Link>

*/}
        </Button>
    );
};

const mapStateToProps = ({ project }) => ({
    project,
});

// const mapDispatchToProps = (dispatch) => ({
    // featureClick: (project) => {
        // dispatch(toggleFeatures());
        // fetch(`${"/issue-tracker/features"}/${project}`)
            // .then((response) => response.json())
            // .then((results) => dispatch(updateIssues(results)))
            // .catch((error) => console.error(error));
    // },
// });

const mapDispatchToProps = (dispatch) => ({
    featureClick: (project) => {
        dispatch(toggleFeatures());
    },
});


FeatureButton.propTypes = {
    project: PropTypes.string,
    featureClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);