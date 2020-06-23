import React from "react";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import IssueTable from "./issueTable";
import Paper from "@material-ui/core/Paper";

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
          <FormGroup>
            <Box component="div">
              Dates:
              <Box>
                Opened:
                <Input
                  disabled={true}
                  defaultValue={dateFormat3(issue.dates.opened)}
                  name="dateOpened"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Last Edited:
                <Input
                  disabled={true}
                  defaultValue={dateFormat3(issue.dates.lastEdited)}
                  name="dateLastEdited"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Closed:
                <Input
                  disabled={true}
                  defaultValue={dateFormat3(issue.dates.closed)}
                  name="dateClosed"
                  style={inputStyle}
                ></Input>
              </Box>
            </Box>
          </FormGroup>

          {/* People */}
          <FormGroup>
            <Box component="div">
              People:
            <Box>
                Opened by:
              <Input
                  disabled={true}
                  defaultValue={issue.people.opened}
                  name="peopleOpened"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Last Edited by:
              <Input
                  disabled={true}
                  defaultValue={issue.people.lastEdited}
                  name="peopleLastEdited"
                  style={inputStyle}
                ></Input>
              </Box>
              <Box>
                Closed by:
              <Input
                  disabled={true}
                  defaultValue={issue.people.closed}
                  name="peopleClosed"
                  style={inputStyle}
                ></Input>
              </Box>
            </Box>
          </FormGroup>

        </Box>
      </Paper>
    </React.Fragment>
  );
};


const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
