import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { changeToBugs } from "../redux/actions";

const customStyles = makeStyles({
  bugButton: {
    background:
      "linear-gradient(300deg, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.9) 100%)",
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
  bugClick: () => {
    dispatch(changeToBugs());
  },
});

const BugButton = (props) => {
  const classes = customStyles();
  return (
    <Button className={classes.bugButton}>
      <Link
        to="/features"
        className={classes.linkStyle}
        onClick={() => props.bugClick()}
      >
        Bug
      </Link>
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BugButton);
