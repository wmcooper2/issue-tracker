import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearIssue } from "../redux/actions";
import { ADD_ISSUE_ENDPOINT } from "../utilities/constants";

const AddButton = ({ addBtnClick, issueType }) => {
    return (
        <Link to={ADD_ISSUE_ENDPOINT} onClick={() => addBtnClick(issueType)}>
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
    addBtnClick: (type) => dispatch(clearIssue(type)),
});

AddButton.propTypes = {
    addBtnClick: PropTypes.func,
    issueType: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
