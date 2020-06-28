import React from "react";
import Button from "@material-ui/core/Button";
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

const FeatureButton = ({ featureClick, project }) => {
  const classes = customStyles();
  return (
    <Button className={classes.featureButton}>
      <Link
        to={FEATURES_ENDPOINT}
        className={classes.linkStyle}
        onClick={() => featureClick(project)}
      >
        Feature
      </Link>
    </Button>
  );
};

const mapStateToProps = ({ project }) => ({
  project,
});

const mapDispatchToProps = (dispatch) => ({
  featureClick: (project) => {
    dispatch(changeToFeatures());
    fetch(`${FEATURES_URL}/${project}`)
      .then((response) => response.json())
      .then((results) => dispatch(updateIssues(results)))
      .catch((error) => console.error(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
