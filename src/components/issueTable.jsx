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

import { connect } from "react-redux";
import { selectIssue } from "../redux/actions";

//the maxHeight property forces the scroll ability to show up when the list exceeds the given height
const customStyles = makeStyles({
  table: { maxHeight: "50vh" },
});

const IssueTable = (props) => {
  const { rowClick, tableClick, issues } = props;
  const Rows = () => {
    if (issues.issues !== undefined) {
      return issues.issues.map((item, index) => (
        <TableRow onClick={() => rowClick(item._id)} key={index}>
          <TableCell>{item.name}</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
      ));
    } else {
      return null;
    }
  };

  const classes = customStyles();
  return (
    <Paper>
      <TableContainer
        onClick={() => tableClick(issues)}
        className={classes.table}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Bug Name</TableCell>
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
// const mapStateToProps = ({ issues }) => ({
const mapStateToProps = ({ issues }) => ({
  issues,
});

const mapDispatchToProps = (dispatch) => ({
  rowClick: (id) => console.log("Row Click:", id),
  tableClick: (issues) => console.log("Table Click:", issues),
});

IssueTable.propTypes = {
  issues: PropTypes.any,
};

IssueTable.defaultProps = {
  issues: [
    { name: "local default props 1", _id: "1" },
    { name: "local default props 2", _id: "2" },
    { name: "local default props 3", _id: "3" },
  ],
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
