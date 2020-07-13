import React from "react";
import Box from "@material-ui/core/Box";
// import IssueDates from "./issueDates";
// import IssuePeople from "./issuePeople";
import IssueTable from "./issueTable";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
    projectDashboard: {},
    description: {
        display: "flex",
        padding: "1rem",
    },
    details: {
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
    },
});

const Dashboard = ({ issue }) => {
    const styles = customStyles();
    return (
        <React.Fragment>
            <Box className={styles.projectDashboard}>
                <IssueTable></IssueTable>
            </Box>
            <Paper component="div" className={styles.description}>
                {issue.description}
            </Paper>

            {/* quick details */}
            {/* <Paper component="div" className={styles.details}> */}
            {/* <IssueDates></IssueDates> */}
            {/* <IssuePeople></IssuePeople> */}
            {/* </Paper> */}
        </React.Fragment >
    );
};

const mapStateToProps = ({ issue }) => ({
    issue,
});

const mapDispatchToProps = () => ({});

Dashboard.propTypes = {
    issue: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
