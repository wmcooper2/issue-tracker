import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { selectIssue } from "../redux/actions";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { DELETE_URL, DEFAULT_ISSUE } from "../utilities/constants";
// import { selectIssue } from "../redux/actions";

//the maxHeight property forces the scroll ability to show up when the list exceeds the given height
const customStyles = makeStyles({
  table: { maxHeight: "50vh" },
});

const IssueTable = (props) => {
  const classes = customStyles();
  const { rowClick, issues, issueType } = props;
  const title = issueType.issueType;
  // console.log("IssueTable:", issueType.issueType);
  const Rows = () => {
    if (issues.issues !== undefined) {
      return issues.issues.map((issue, index) => (
        <TableRow onClick={() => rowClick(issue)} key={index}>
          <TableCell>
            <Link to="/add-issue">{issue.name}</Link>
          </TableCell>
          <TableCell>10</TableCell>
        </TableRow>
      ));
    } else {
      return null;
    }
  };

  return (
    <Paper>
      <TableContainer className={classes.table}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell>View Count</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <Rows props={issues.issues}></Rows>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

//the issues in the body match the props that the IssueTable uses
//the destructured issues in the argument are what you want to pull from the store
const mapStateToProps = ({ issues, issueType }) => ({
  issues,
  issueType,
});

const mapDispatchToProps = (dispatch) => ({
  rowClick: (issue) => {
    // fetch(`${DELETE_URL}/${issue._id}`, { method: "POST" });
    dispatch(selectIssue(issue));
    // dispatch(updateIssues());
    // dispatch(changeToBugs());
    // console.log("IssueTable, mdtp, issue:", issue);
  },
});

IssueTable.propTypes = {
  issues: PropTypes.any,
};

IssueTable.defaultProps = {
  issues: [DEFAULT_ISSUE, DEFAULT_ISSUE, DEFAULT_ISSUE],
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
