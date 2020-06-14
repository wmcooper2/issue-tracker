import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// const IssueTable = (props) => {
class IssueTable extends React.Component {
  //   console.log("IssueTable props:", props);
  //   const { bugs } = props;
  //   console.log("bugs:", bugs);
  render() {
    let { issues } = this.props;
    console.log("IssueTable, Type & Issues:", typeof issues, issues);
    return (
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Bug Name</TableCell>
              <TableCell>View Count</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {issues === null
              ? null
              : issues.map((item, index) => (
                  <TableRow onClick={() => console.log(item._id)} key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

//the issues in the body match the props that the IssueTable uses
//the destructured issues in the argument are what you want to pull from the store
const mapStateToProps = ({ issues }) => ({
  issues,
});

IssueTable.propTypes = {
  issues: PropTypes.any,
};

IssueTable.defaultProps = {
  issues: [
    { name: "bug1", _id: "1" },
    { name: "bug2", _id: "2" },
    { name: "bug3", _id: "3" },
  ],
};

export default connect(mapStateToProps)(IssueTable);
