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

import { BUGS, DELETE_URL, DEFAULT_ISSUE } from "../utilities/constants";

//the maxHeight property forces the scroll ability to show up when the list exceeds the given height
const customStyles = makeStyles({
  table: { maxHeight: "50vh" },
  bug: { backgroundColor: "blue" },
  feature: { backgroundColor: "purple" },
});

const IssueTable = (props) => {
  // console.log("IssueTable, props:", props);
  const styles = customStyles();
  const { rowClick, issues, issueType } = props;
  // console.log("IssueTable, issues:", issues);

  const Rows = () => {
    if (issues !== undefined) {
      return issues.map((issue, index) => (
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
    // <Paper style={issueType === BUGS ? styles.bug : styles.feature}>
    <Paper
      style={
        issueType === BUGS
          ? { backgroundColor: "blue" }
          : { backgroundColor: "purple" }
      }
    >
      <TableContainer className={styles.table}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{issueType}</TableCell>
              <TableCell>View Count</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <Rows props={issues}></Rows>
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
