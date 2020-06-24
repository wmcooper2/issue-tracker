import React from "react";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import IssueTable from "./issueTable";
import Paper from "@material-ui/core/Paper";

import IssueDates from "./issueDates";
import { connect } from "react-redux";
import { dateFormat3 } from "../utilities/utilities";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  projectDashboard: {},
  description: {
    display: "flex",
    flexDirection: "column",
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
  const inputStyle = { width: "100%", minWidth: "50vw" };
  return (
    <React.Fragment>
      <Box className={styles.projectDashboard}>
        <IssueTable></IssueTable>
      </Box>
      <Paper className={styles.description}>
        <Box component="div">{issue.description}</Box>

        <Box component="div" className={styles.details}>
          {/* Dates */}
          <IssueDates></IssueDates>

          {/* The dates and the people fields should update in a similar way... */}

          {/* People */}
          <FormGroup>
            <Box component="div">
              People:
            <Box>
                Opened by:
              <Input
                  disabled={true}
                  defaultValue={issue.people === undefined ? null : issue.people.opened}
                  name="peopleOpened"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Last Edited by:
              <Input
                  disabled={true}
                  defaultValue={issue.people === undefined ? null : issue.people.lastEdited}
                  name="peopleLastEdited"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Closed by:
              <Input
                  disabled={true}
                  defaultValue={issue.people === undefined ? null : issue.people.closed}
                  name="peopleClosed"
                  style={inputStyle}
                ></Input>
              </Box>
            </Box>
          </FormGroup>

        </Box>
      </Paper>
    </React.Fragment >
  );
};


const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
