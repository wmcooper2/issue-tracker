import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { changeToBugs, changeToFeatures } from "../redux/actions";

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
  const { bugClick, featureClick } = props;
  return (
    <React.Fragment>
      <ButtonGroup className={classes.buttonGroup}>
        <Button className={classes.bugButton}>
          <Link
            to="/bugs"
            className={classes.linkStyle}
            onClick={() => bugClick()}
          >
            Bugs
          </Link>
        </Button>

        <Button className={classes.featureButton}>
          <Link
            to="/features"
            className={classes.linkStyle}
            onClick={() => featureClick()}
          >
            Features
          </Link>
        </Button>
      </ButtonGroup>

      <Link to="/add-issue">
        <Fab size="small" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
      <Link to="/edit-issue">
        <Fab size="small" aria-label="edit">
          <EditIcon />
        </Fab>
      </Link>
    </React.Fragment>
  );
};

const mapStateToProps = ({ issueType }) => ({
  issueType,
});

const mapDispatchToProps = (dispatch) => ({
  featureClick: () => {
    dispatch(changeToFeatures());
  },
  bugClick: () => {
    dispatch(changeToBugs());
  },
});

// export default connect(mapDispatchToProps)(IssueBtns);
export default connect(mapStateToProps, mapDispatchToProps)(IssueBtns);
