import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const BugFeatureTable = (props) => {
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
          <TableRow>
            <TableCell>Example of a bug description</TableCell>
            <TableCell>10</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Example of a bug description</TableCell>
            <TableCell>10</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Example of a bug description</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BugFeatureTable;
