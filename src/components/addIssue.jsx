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
  // console.log("AddIssue, props.issue", props.issue);
  // console.log("AddIssue, props:", props);
  console.log("AddIssue, issue", issue);
  console.log("AddIssue, issueType:", issueType);
  return (
    <Box>
      <form
        action="https://wmcooper2.com/issue-tracker-api/add-issue"
        method="POST"
      >
        <FormGroup>
          <Input
            placeholder={`${issueType.issueType} Name`}
            variant="outlined"
            name="issueName"
          ></Input>
          <Input
            placeholder={`${issue.issue.category}`}
            variant="outlined"
            name="category"
          ></Input>
          <Input
            disable="true"
            placeholder={`Version: ${issue.issue.version}`}
            name="version"
          ></Input>
          <Input disable="true" placeholder={`ID: ${issue.issue._id}`}></Input>
          <Box component="span">
            Priority:
            <PriorityBtns></PriorityBtns>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box component="div">
            Dates:
            <Box>
              <Input
                disable="true"
                placeholder={`opened: ${issue.issue.dates.opened}`}
                name="dateOpened"
              ></Input>
            </Box>
            <Box>
              <Input
                disable="true"
                placeholder={`last edited: ${issue.issue.dates.lastEdited}`}
                name="dateLastEdited"
              ></Input>
            </Box>
            <Box>
              <Input
                disable="true"
                placeholder={`closed: ${issue.issue.dates.closed}`}
                name="dateClosed"
              ></Input>
            </Box>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box component="div">
            People:
            <Box>
              <Input
                disable="true"
                placeholder={`opened: ${issue.issue.people.opened}`}
                name="peopleOpened"
              ></Input>
            </Box>
            <Box>
              <Input
                disable="true"
                placeholder={`last edited: ${issue.issue.people.lastEdited}`}
                name="peopleLastEdited"
              ></Input>
            </Box>
            <Box>
              <Input
                disable="true"
                placeholder={`closed: ${issue.issue.people.closed}`}
                name="peopleClosed"
              ></Input>
            </Box>
          </Box>
        </FormGroup>

        <FormGroup>
          <Box>
            Description:
            <TextareaAutosize
              defaultValue={issue.issue.description}
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
        <Button variant="contained" color="primary" name="close" type="submit">
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          name="close"
          onClick={() => closeClick()}
        >
          Close
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
