import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToFeatures } from "../redux/actions";
import { FEATURE_GRADIENT } from "../utilities/constants";
// import {BUGS} from "../utilities/constants";

const customStyles = makeStyles({
  featureButton: { background: FEATURE_GRADIENT, },
  linkStyle: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "black",
    cursor: "pointer",
    textDecoration: "none",
  },
});

const mapStateToProps = ({ issueType }) => ({
  issueType,
});

const mapDispatchToProps = (dispatch) => ({
  featureClick: () => {
    dispatch(changeToFeatures());
  },
});

const FeatureButton = ({ issueType, featureClick }) => {
  const classes = customStyles();
  return (
    <Button
      className={classes.featureButton}
      // disabled={issueType === BUGS ? "true" : "false"}
    >
      <Link
        to="/features"
        className={classes.linkStyle}
        onClick={() => featureClick()}
      >
        Feature
      </Link>
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
