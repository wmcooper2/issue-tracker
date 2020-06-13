import React from "react";
// import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import PriorityBtns from "./priorityBtns";

const AddBug = (props) => {
  return (
    <Box>
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

export default AddBug;
