import React from "react";

import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";

import { connect } from "react-redux";
import { dateFormat } from "../utilities/utilities";

const IssueDates = ({ issue }) => {
  const dateLastEdited =
    issue.dates !== undefined ? issue.dates.lastEdited : null;
  const dateClosed = issue.dates !== undefined ? issue.dates.closed : null;
  const inputStyle = { width: "100%", minWidth: "50vw" };
  return (

    <FormGroup>
      <Box component="div">
        Dates:
        <Box>
          Opened:
          <Input
            disabled={true}
            defaultValue={dateFormat(issue.dates.opened)}
            name="dateOpened"
            style={inputStyle}
          ></Input>
        </Box>
        <Box>
          Last Edited:
          <Input
            disabled={true}
            defaultValue={dateFormat(dateLastEdited)}
            name="dateLastEdited"
            style={inputStyle}
          ></Input>
        </Box>
        <Box>
          Closed:
          <Input
            disabled={true}
            defaultValue={dateFormat(dateClosed)}
            name="dateClosed"
            style={inputStyle}
          ></Input>
        </Box>
      </Box>
    </FormGroup>

  );
};

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssueDates);
