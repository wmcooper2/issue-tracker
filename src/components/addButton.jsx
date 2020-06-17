import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addNewIssue } from "../redux/actions";

const AddButton = ({ addBtnClick, issueType }) => {
  return (
    <Link to="/add-issue" onClick={() => addBtnClick(issueType)}>
      <Fab size="small" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
};

const mapStateToProps = ({ issueType }) => ({
  issueType,
});

const mapDispatchToProps = (dispatch) => ({
  addBtnClick: (type) => dispatch(addNewIssue(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
