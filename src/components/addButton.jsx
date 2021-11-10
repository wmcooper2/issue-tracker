import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearIssue } from "../redux/actions";
import { ADD_ISSUE_ENDPOINT } from "../utilities/constants";
import { makeStyles } from "@material-ui/core/styles";

const AddButton = ({ addBtnClick, issueType }) => {
    const customStyles = makeStyles({addNew:{textDecoration: "none"}});
    const classes = customStyles();
    
    return (
        <Link to={ADD_ISSUE_ENDPOINT} className={classes.addNew}onClick={() => addBtnClick(issueType)}>
            <Button>
            {/* <Fab size="small" aria-label="add"> */}
                <AddIcon />
            {/* </Fab> */}
                Add New
            </Button>
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
