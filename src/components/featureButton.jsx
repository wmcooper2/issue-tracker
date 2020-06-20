import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToFeatures } from "../redux/actions";
import { FEATURE_GRADIENT, FEATURES_URL } from "../utilities/constants";
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

const FeatureButton = (props) => {
  const classes = customStyles();
  return (
    <Button className={classes.featureButton}>
      <Link
        to="/features"
        className={classes.linkStyle}
        onClick={() => props.featureClick()}
      >
        Feature
      </Link>
    </Button>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  featureClick: () => {
    dispatch(changeToFeatures());
    fetch(FEATURES_URL)
      .then((response) => response.json())
      .then((results) => dispatch(updateIssues(results)))
      .catch((error) => console.error(error));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
