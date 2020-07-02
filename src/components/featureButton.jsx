import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToFeatures } from "../redux/actions";
import { FEATURE_GRADIENT, FEATURES_URL, FEATURES_ENDPOINT } from "../utilities/constants";
import { updateIssues } from "../redux/actions";

const customStyles = makeStyles({
    featureButton: { background: FEATURE_GRADIENT },
    linkStyle: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "black",
        cursor: "pointer",
        textDecoration: "none",
    },
});

// const FeatureButton = ({ featureClick, project }) => {
const FeatureButton = ({ featureClick }) => {
    const classes = customStyles();
    return (
        <Button className={classes.featureButton}>
            <Link
                to={FEATURES_ENDPOINT}
                className={classes.linkStyle}
                // onClick={() => featureClick(project)}
                onClick={() => featureClick()}
            >
                Feature
            </Link>
        </Button>
    );
};

// const mapStateToProps = ({ project }) => ({
const mapStateToProps = () => ({
    // project,
});

const mapDispatchToProps = (dispatch) => ({
    // featureClick: (project) => {
    featureClick: () => {
        dispatch(changeToFeatures());
        // fetch(`${FEATURES_URL}/${project}`)
        fetch(FEATURES_URL)
            .then((response) => response.json())
            .then((results) => dispatch(updateIssues(results)))
            .catch((error) => console.error(error));
    },
});

FeatureButton.propTypes = {
    // project: PropTypes.string,
    featureClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
