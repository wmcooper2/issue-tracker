import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";

const IssuePeople = (props) => {
  const { issue } = props;
  const inputStyle = { width: "100%", minWidth: "50vw" };
  const personOpened = issue.people !== undefined ? issue.people.opened : null;
  const personLastEdited =
    issue.people !== undefined ? issue.people.lastEdited : null;
  const personClosed = issue.people !== undefined ? issue.people.closed : null;
  return (

    <FormGroup>
      <Box component="div">
        People:
        <Box>
          Opened by:
          <Input
            disabled={true}
            defaultValue={personOpened}
            name="peopleOpened"
            style={inputStyle}
          ></Input>
        </Box>
        <Box>
          Last Edited by:
          <Input
            disabled={true}
            defaultValue={personLastEdited}
            name="peopleLastEdited"
            style={inputStyle}
          ></Input>
        </Box>
        <Box>
          Closed by:
          <Input
            disabled={true}
            defaultValue={personClosed}
            name="peopleClosed"
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

export default connect(mapStateToProps, mapDispatchToProps)(IssuePeople);
