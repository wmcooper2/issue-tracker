import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToFeatures } from "../redux/actions";

const customStyles = makeStyles({
  featureButton: {
    background:
      "linear-gradient(300deg, rgba(128,0,128,0.6) 0%, rgba(128,0,128,0.9) 100%)",
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureButton);
