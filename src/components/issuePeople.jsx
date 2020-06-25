import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const customStyles = makeStyles({
  table: { width: "100%", minWidth: "50vw" },
});


const IssuePeople = (props) => {
  const { issue } = props;
  const styles = customStyles();
  const personOpened = issue.people !== undefined ? issue.people.opened : null;
  const personLastEdited =
    issue.people !== undefined ? issue.people.lastEdited : null;
  const personClosed = issue.people !== undefined ? issue.people.closed : null;
  return (
    <Paper>
      <TableContainer className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                People:
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                Opened by:
            </TableCell>
              <TableCell>
                {personOpened}
              </TableCell>
            </TableRow>
            <TableCell>
              Last edited by:
              </TableCell>
            <TableCell>
              {personLastEdited}
            </TableCell>
            <TableRow>
              <TableCell>
                Closed by:
            </TableCell>
            </TableRow>
            <TableCell>
              {personClosed}
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper >


  );
};

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssuePeople);
