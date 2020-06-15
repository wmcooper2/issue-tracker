import React from "react";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import PriorityBtns from "./priorityBtns";

import { connect } from "react-redux";

const AddIssue = (props) => {
  const issueType = props.issueType.issueType;
  return (
    <Box onClick={() => props.formClick(issueType)}>
      <form
        action="https://wmcooper2.com/bug-tracker-api/add-bug"
        method="POST"
      >
        <FormGroup>
          <PriorityBtns></PriorityBtns>
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Bug Name"
            variant="outlined"
            name="bugName"
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
  formClick: (data) => console.log("Form Click:", data),
});

// export default AddIssue;

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
