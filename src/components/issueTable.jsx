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
import { EditButton } from "./editButton";
// import { showIssueDescription } from "../redux/actions";

import {
  BUG,
  // DELETE_URL,
  DEFAULT_ISSUE,
  BUG_BLUE_3,
  FEATURE_PURPLE_3,
  PRIORITY_A,
  PRIORITY_B,
  // PRIORITY_C,
  PRIORITY_A_RED_3,
  PRIORITY_B_YELLOW_3,
  PRIORITY_C_GREEN_3,
} from "../utilities/constants";
import { dateFormat } from "../utilities/utilities";

//the maxHeight property forces the scroll ability to show up when the list exceeds the given height
const customStyles = makeStyles({
  table: { maxHeight: "50vh" },
  bug: { backgroundColor: "blue" },
  feature: { backgroundColor: "purple" },
  test: { backgroundColor: "seagreen" },
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
          <TableCell
            style={
              issue.issueType === BUG
                ? { backgroundColor: BUG_BLUE_3 }
                : { backgroundColor: FEATURE_PURPLE_3 }
            }
          >
            <EditButton></EditButton>
            {/* <Link onClick={() => showDescription()}>{issue.name}</Link> */}
            {/* <Link>{issue.name}</Link> */}
            {issue.name}
          </TableCell>
          {/* <TableCell>10</TableCell> */}
          <TableCell
            style={
              issue.priority === PRIORITY_A
                ? { backgroundColor: PRIORITY_A_RED_3 }
                : issue.priority === PRIORITY_B
                ? { backgroundColor: PRIORITY_B_YELLOW_3 }
                : { backgroundColor: PRIORITY_C_GREEN_3 }
            }
          >
            {issue.priority}
          </TableCell>
          <TableCell>
            {issue.dates === undefined ? null : dateFormat(issue.dates.opened)}
          </TableCell>
          <TableCell>
            {issue.people === undefined ? null : issue.people.opened}
          </TableCell>
        </TableRow>
      ));
    } else {
      return null;
    }
  };

  return (
    // <Paper style={issueType === BUG ? styles.bug : styles.feature}>
    // style={ issueType === BUG ? { backgroundColor: "blue" } : { backgroundColor: "purple" } }
    <Paper>
      <TableContainer className={styles.table}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{issueType}</TableCell>
              {/* <TableCell>View Count</TableCell> */}
              <TableCell>Priority</TableCell>
              <TableCell>Date Opened</TableCell>
              <TableCell>Opened by</TableCell>
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
  // showDescription: () => dispatch(showIssueDescription()),
});

IssueTable.propTypes = {
  issues: PropTypes.any,
};

IssueTable.defaultProps = {
  issues: [DEFAULT_ISSUE, DEFAULT_ISSUE, DEFAULT_ISSUE],
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
