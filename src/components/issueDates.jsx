import React from "react";

import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
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



const IssueDates = ({ issue }) => {
    const inputStyle = { width: "100%", minWidth: "50vw" };
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Dates:
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
                    <TableCell>
                        Last Edited:
                    </TableCell>
                    <TableCell>
                        {issue.dates === undefined ? null : dateFormat3(issue.dates.lastEdited)}
                    </TableCell>
                    <TableRow>
                        <TableCell>
                            Closed:
                    </TableCell>
                    </TableRow>
                    <TableCell>
                        {issue.dates === undefined ? null : dateFormat3(issue.dates.closed)}
                    </TableCell>
                </TableBody>
            </Table>
        </Paper >
    );
};

//the maxHeight property forces the scroll ability to show up when the list exceeds the given height
const customStyles = makeStyles({
    table: { maxHeight: "50vh" },
    bug: { backgroundColor: "blue" },
    feature: { backgroundColor: "purple" },
    test: { backgroundColor: "seagreen" },
});


const mapStateToProps = ({ issue }) => ({
    issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssueDates);
