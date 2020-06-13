import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const BugFeatureTable = (props) => {
  console.log("BugFeatureTable props:", props);
  const { bugs } = props;
  console.log("bugs:", bugs);
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
          {bugs === null
            ? null
            : bugs.map((item, index) => (
                <TableRow onClick={() => console.log(item._id)} key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BugFeatureTable;
