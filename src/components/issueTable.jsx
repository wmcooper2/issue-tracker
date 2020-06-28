import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { selectIssue } from "../redux/actions";
import { connect } from "react-redux";
import { EditButton } from "./editButton";
import { makeStyles } from "@material-ui/core/styles";

import {
  BUG,
  BUG_BLUE_3,
  FEATURE_PURPLE_3,
  PRIORITY_A,
  PRIORITY_B,
  PRIORITY_C,
  PRIORITY_A_RED_3,
  PRIORITY_B_YELLOW_3,
  PRIORITY_C_GREEN_3,
} from "../utilities/constants";
import { initialState } from "../redux/initialState";
import { dateFormat3 } from "../utilities/utilities";

const customStyles = makeStyles({
  table: { maxHeight: "50vh" },
});

const filterPriorities = (issue, priorityASelected, priorityBSelected, priorityCSelected) => {
  switch (issue.priority) {
    case PRIORITY_A:
      if (priorityASelected) {
        return true;
      }
      break;
    case PRIORITY_B:
      if (priorityBSelected) {
        return true;
      }
      break;
    case PRIORITY_C:
      if (priorityCSelected) {
        return true;
      }
      break;
    default:
      return false;
  }
}

const IssueTable = ({
  rowClick,
  issues,
  issueType,
  priorityASelected,
  priorityBSelected,
  priorityCSelected }) => {

  const filteredIssues = issues.filter(issue => filterPriorities(issue, priorityASelected, priorityBSelected, priorityCSelected) === true);

  const styles = customStyles();
  const Rows = () => {
    if (filteredIssues !== undefined) {
      return filteredIssues.map((issue, index) => (

        <TableRow
          className="issueRow"
          onClick={() => rowClick(issue)}
          key={index}
        >
          <TableCell
            style={
              issue.issueType === BUG
                ? { backgroundColor: BUG_BLUE_3 }
                : { backgroundColor: FEATURE_PURPLE_3 }
            }
          >
            <EditButton></EditButton>
            {issue.name}
          </TableCell>

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
            {issue.dates === undefined ? null : dateFormat3(issue.dates.opened)}
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
    <Paper>
      <TableContainer className={styles.table}>
        <Table stickyHeader>
          <TableHead>

            <TableRow>
              <TableCell>{issueType}</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Date Opened</TableCell>
              <TableCell>Opened by</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <Rows></Rows>
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
};

//the issues in the body match the props that the IssueTable uses
//the destructured issues in the argument are what you want to pull from the store
const mapStateToProps = ({ issues, issueType, priorityASelected, priorityBSelected, priorityCSelected }) => ({
  issues,
  issueType,
  priorityASelected,
  priorityBSelected,
  priorityCSelected,
});

const mapDispatchToProps = (dispatch) => ({
  rowClick: (issue) => {
    dispatch(selectIssue(issue));
  },
});

IssueTable.propTypes = {
  issues: PropTypes.any,
};

IssueTable.defaultProps = {
  issues: initialState.issues,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
