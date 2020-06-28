import React from "react";
import { connect } from "react-redux";
import { dateFormat3 } from "../utilities/utilities";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";


const customStyles = makeStyles({
    table: { width: "100%", minWidth: "40vw" },
});


const IssueDates = ({ issue }) => {
    const styles = customStyles();
    return (
        <Paper>
            <TableContainer className={styles.table}>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <Typography variant="h6">
                                    Dates:
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        <TableRow>
                            <TableCell>
                                Opened:
                            </TableCell>
                            <TableCell>
                                {issue.dates === undefined ? null : dateFormat3(issue.dates.opened)}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Last Edited:
                            </TableCell>
                            <TableCell>
                                {issue.dates === undefined ? null : dateFormat3(issue.dates.lastEdited)}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Closed:
                            </TableCell>
                            <TableCell>
                                {issue.dates === undefined ? null : dateFormat3(issue.dates.closed)}
                            </TableCell>
                        </TableRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(IssueDates);
