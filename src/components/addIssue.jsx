import React from "react";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import PriorityBtns from "./priorityBtns";

import { connect } from "react-redux";

const AddIssue = (props) => {
  // console.log("Props:", props);
  const issueType = props.issueType.issueType;
  console.log("Issue Type:", issueType);
  return (
    // <Box onClick={() => props.formClick(issueType)}>
    <Box>
      <form
        action="https://wmcooper2.com/issue-tracker-api/add-issue"
        method="POST"
      >
        <FormGroup>
          <PriorityBtns></PriorityBtns>
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Issue Name"
            variant="outlined"
            name="issueName"
          ></Input>
          <Input
            placeholder="Category"
            variant="outlined"
            name="category"
          ></Input>
        </FormGroup>
        <Input type="submit"></Input>
      </form>
    </Box>
  );
};

const mapStateToProps = ({ issueType }) => ({
  issueType,
});

const mapDispatchToProps = (dispatch) => ({
  // formClick: (data) => console.log("Form Click:", data),
});

// export default AddIssue;

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
