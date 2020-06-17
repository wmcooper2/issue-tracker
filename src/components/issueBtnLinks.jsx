import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FeatureButton from "./featureButton";
import BugButton from "./bugButton";
//
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import { AddButton } from "./addButton";
// import { EditButton } from "./editButton";
// import { changeToBugs } from "../redux/actions";

const customStyles = makeStyles({
  buttonGroup: { minHeight: "10mm", margin: "1rem" },
  bugButton: {
    background:
      "linear-gradient(300deg, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.9) 100%)",
  },
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

const IssueBtns = (props) => {
  const classes = customStyles();
  return (
    <React.Fragment>
      <ButtonGroup className={classes.buttonGroup}>
        <BugButton></BugButton>
        <FeatureButton></FeatureButton>
      </ButtonGroup>
      {/* <AddButton></AddButton> */}
      {/* <EditButton></EditButton> */}
    </React.Fragment>
  );
};

const mapStateToProps = ({ issueType }) => ({
  issueType,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssueBtns);
