import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
// import PriorityBtns from "./priorityBtns";
import PriorityRadio from "./priorityRadio";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { connect } from "react-redux";
import { updateIssues } from "../redux/actions";
import { dateFormat } from "../utilities/utilities";

const AddIssue = (props) => {
  const { closeClick, issue, issueType } = props;
  // console.log("AddIssue, props:", props);

  const name = issue.name !== undefined ? issue.name : null;
  const description =
    issue.description !== undefined ? issue.description : null;
  const category = issue.category !== undefined ? issue.category : null;
  const version = issue.version !== undefined ? issue.version : null;
  const id = issue._id !== undefined ? issue._id : null;
  const dateOpened = issue.dates !== undefined ? issue.dates.opened : null;
  const dateLastEdited =
    issue.dates !== undefined ? issue.dates.lastEdited : null;
  const dateClosed = issue.dates !== undefined ? issue.dates.closed : null;
  const personOpened = issue.people !== undefined ? issue.people.opened : null;
  const personLastEdited =
    issue.people !== undefined ? issue.people.lastEdited : null;
  const personClosed = issue.people !== undefined ? issue.people.closed : null;

  const inputStyle = { width: "100%", minWidth: "50vw" };
  const textAreaStyle = { resize: "vertical", minWidth: "50vw" };

  return (
    <Box
      style={{
        width: "50vw",
        margin: "auto auto",
      }}
    >
      <form
        action="https://wmcooper2.com/issue-tracker-api/add-issue"
        method="POST"
      >
        <FormGroup>
          <Box component="div">
            Name:
            <Input
              // placeholder={name}
              variant="outlined"
              name="issueName"
              style={inputStyle}
              defaultValue={name}
            ></Input>
          </Box>

          <Box component="div">
            Category:
            <Input
              // placeholder={category}
              variant="outlined"
              name="category"
              style={inputStyle}
              defaultValue={category}
            ></Input>
          </Box>

          <Box component="div">
            Version:
            <Input
              readOnly="true"
              defaultValue={version}
              name="version"
              style={inputStyle}
            ></Input>
          </Box>

          <Box component="div">
            ID:
            <Input readOnly="true" value={id} style={inputStyle}></Input>
          </Box>

          <Box component="div">
            Type:
            <Input readOnly="true" value={issueType} style={inputStyle}></Input>
          </Box>

          <Box component="span">
            Priority:
            {/* <PriorityBtns></PriorityBtns> */}
            <PriorityRadio></PriorityRadio>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box component="div">
            Dates:
            <Box>
              Opened:
              <Input
                disabled="true"
                defaultValue={dateFormat(dateOpened)}
                name="dateOpened"
                style={inputStyle}
              ></Input>
            </Box>
            <Box>
              Last Edited:
              <Input
                disabled="true"
                defaultValue={dateFormat(dateLastEdited)}
                name="dateLastEdited"
                style={inputStyle}
              ></Input>
            </Box>
            <Box>
              Closed:
              <Input
                disabled="true"
                defaultValue={dateFormat(dateClosed)}
                name="dateClosed"
                style={inputStyle}
              ></Input>
            </Box>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box component="div">
            People:
            <Box>
              Opened by:
              <Input
                disabled="true"
                defaultValue={personOpened}
                name="peopleOpened"
                style={inputStyle}
              ></Input>
            </Box>
            <Box>
              Last Edited by:
              <Input
                disabled="true"
                defaultValue={personLastEdited}
                name="peopleLastEdited"
                style={inputStyle}
              ></Input>
            </Box>
            <Box>
              Closed by:
              <Input
                disabled="true"
                defaultValue={personClosed}
                name="peopleClosed"
                style={inputStyle}
              ></Input>
            </Box>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>
            Description:
            <TextareaAutosize
              defaultValue={description}
              name="description"
              style={textAreaStyle}
            ></TextareaAutosize>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>
            <List>Make message list</List>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>
            <List>Make similar issues list</List>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>Make keywords text area</Box>
        </FormGroup>
        <Button variant="contained" color="primary" name="submit" type="submit">
          Submit {issueType}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          name="close"
          onClick={() => closeClick()}
        >
          Close {issueType}
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = ({ issueType, issue }) => ({
  issueType,
  issue,
});

const mapDispatchToProps = (dispatch) => ({
  closeClick: () => {
    console.log("Close Click");
    dispatch(updateIssues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
