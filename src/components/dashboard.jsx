import React from "react";
import IssueTable from "./issueTable";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const customStyles = makeStyles({
  projectDashboard: {},
  bugButton: { backgroundColor: "blue" },
  featureButton: { backgroundColor: "purple" },
  priorityA: { backgroundColor: "red" },
  priorityB: { backgroundColor: "yellow" },
  priorityC: { backgroundColor: "green" },
});

const Dashboard = ({ issue }) => {
  const classes = customStyles();
  return (
    <React.Fragment>
      <Box className={classes.projectDashboard}>
        <IssueTable></IssueTable>
      </Box>
      <Box>{issue.description}</Box>
    </React.Fragment>
  );
};

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
