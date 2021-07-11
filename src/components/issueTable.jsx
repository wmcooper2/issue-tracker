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
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { issue, PRIORITY_A, PRIORITY_B, PRIORITY_C} from "../utilities/constants";
import { initialState } from "../redux/initialState";
import { dateFormat3 } from "../utilities/utilities";

const customStyles = makeStyles({
    table: { maxHeight: "50vh" },
});

const filterBugsFeatures = (item, selections) => {
    if (selections.includes(item.issueType)){
        return true;
    } else {
        return false;
    }
    //for selection in selections
    // if the item.issueType is not in selections
    //  then remove it
    //if selections is empty
    // return false
};



const filterPriorities = (item, priorityASelected, priorityBSelected, priorityCSelected) => {
    switch (item.priority) {
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
};


// const filterIssues = (item) => {
    // switch(item)
// }

let IssueRow = (item) => {

                <TableRow
                    className="issueRow"
                    onClick={() => rowClick(item, history)}
                    onMouseEnter={() => toggleHover(item)}
                    onMouseLeave={() => toggleHover}
                    key={index}>
{/* move to styling to makestyles */}
                    <TableCell
                        style={
                            item.issueType === issue.bug
                                ? { backgroundColor: "rgba(0,0,255, 0.3)"}
                                : { backgroundColor: "rgba(128,0,128, 0.3)"}}>
                        {item.name}
                    </TableCell>

                    <TableCell
                        style={
                            item.priority === PRIORITY_A
                                ? { backgroundColor: "rgba(255,0,0,0.3)"}
                                : item.priority === PRIORITY_B
                                    ? { backgroundColor: "rgba(255,255,0,0.3)"}
                                    : { backgroundColor: "rgba(0,128,0,0.3)"}}>
                        {item.priority}
                    </TableCell>

                    <TableCell>
                        {item.dates === undefined ? null : dateFormat3(item.dates.opened)}
                    </TableCell>

                    <TableCell>
                        {item.people === undefined ? null : item.people.opened}
                    </TableCell>
                </TableRow>

}


let IssueTable = ({
    rowClick,
    issues,
    issueType,
    issueSelection,
    priorityASelected,
    priorityBSelected,
    priorityCSelected
}) => {

    let history = useHistory();

    //filter issues based on bug or feature
    let filteredIssues = issues.filter(item => filterBugsFeatures(item, issueSelection) === true);

    // then filter on pirority
    // filteredIssues = issues.filter(item =>
    filteredIssues = filteredIssues.filter(item =>
        filterPriorities(item, priorityASelected, priorityBSelected, priorityCSelected) === true);
    

    let toggleHover = (item) => {
        console.log("hovering...", item);
    }

    const styles = customStyles();

    const Rows = () => {
        if (filteredIssues !== undefined) {
            return filteredIssues.map((item, index) => (

                <TableRow
                    className="issueRow"
                    onClick={() => rowClick(item, history)}
                    onMouseEnter={() => toggleHover(item)}
                    onMouseLeave={() => toggleHover}
                    key={index}>
                    <TableCell
                        style={
                            item.issueType === issue.bug
                                ? { backgroundColor: "rgba(0,0,255, 0.3)"}
                                : { backgroundColor: "rgba(128,0,128, 0.3)"}}>
                        {item.name}
                    </TableCell>
                    <TableCell
                        style={
                            item.priority === PRIORITY_A
                                ? { backgroundColor: "rgba(255,0,0,0.3)"}
                                : item.priority === PRIORITY_B
                                    ? { backgroundColor: "rgba(255,255,0,0.3)"}
                                    : { backgroundColor: "rgba(0,128,0,0.3)"}}>
                        {item.priority}
                    </TableCell>
                    <TableCell>
                       {item.dates === undefined ? null : dateFormat3(item.dates.opened)}
                    </TableCell>

                    <TableCell>
                        {item.people === undefined ? null : item.people.opened}
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
{/* need to change the  */}
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>{issueType === issue.bug ? issue.bug : (issue.feature ? issue.feature : "ISSUES")}</TableCell> */}
                            <TableCell></TableCell>
                            {/* <TableCell>Priority</TableCell> */}
                            <TableCell></TableCell>
                            <TableCell>Opened</TableCell>
                            <TableCell>By</TableCell>
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
const mapStateToProps = ({ issues, issueType, issueSelection, priorityASelected, priorityBSelected, priorityCSelected }) => ({
    issues,
    issueType,
    issueSelection,
    priorityASelected,
    priorityBSelected,
    priorityCSelected,
});

const mapDispatchToProps = (dispatch) => ({
    rowClick: async (item, history) => {
        await dispatch(selectIssue(item));
        history.push("/full-details");
    },
});

IssueTable.propTypes = {
    rowClick: PropTypes.func,
    issues: PropTypes.array,
    issueType: PropTypes.string,
    issueSelection: PropTypes.array,
    priorityASelected: PropTypes.bool,
    priorityBSelected: PropTypes.bool,
    priorityCSelected: PropTypes.bool,
};

IssueTable.defaultProps = {
    issues: initialState.issues,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
