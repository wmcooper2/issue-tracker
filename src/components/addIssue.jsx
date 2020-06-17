import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import PriorityBtns from "./priorityBtns";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { connect } from "react-redux";
import { updateIssues } from "../redux/actions";

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

  return (
    <Box>
      <form
        action="https://wmcooper2.com/issue-tracker-api/add-issue"
        method="POST"
      >
        <FormGroup>
          <Input placeholder={name} variant="outlined" name="issueName"></Input>
          <Input
            placeholder={`${category}`}
            variant="outlined"
            name="category"
          ></Input>
          <Input
            disabled="true"
            placeholder={`Version: ${version}`}
            name="version"
          ></Input>
          <Input disabled="true" placeholder={`ID: ${id}`}></Input>
          <Box component="span">
            Priority:
            <PriorityBtns></PriorityBtns>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box component="div">
            Dates:
            <Box>
              Opened:
              <Input
                disabled="true"
                placeholder={dateOpened}
                name="dateOpened"
              ></Input>
            </Box>
            <Box>
              Last Edited:
              <Input
                disabled="true"
                placeholder={dateLastEdited}
                name="dateLastEdited"
              ></Input>
            </Box>
            <Box>
              Closed:
              <Input
                disabled="true"
                placeholder={dateClosed}
                name="dateClosed"
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
                placeholder={personOpened}
                name="peopleOpened"
              ></Input>
            </Box>
            <Box>
              Last Edited by:
              <Input
                disabled="true"
                placeholder={personLastEdited}
                name="peopleLastEdited"
              ></Input>
            </Box>
            <Box>
              Closed by:
              <Input
                disabled="true"
                placeholder={personClosed}
                name="peopleClosed"
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
