import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  buttonGroup: { minHeight: "10mm", margin: "1rem" },
  priorityA: {
    background:
      "linear-gradient(300deg, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0.9) 100%)",
  },
  priorityB: {
    background:
      "linear-gradient(300deg, rgba(255,255,0,0.6) 0%, rgba(255,255,0,0.9) 100%)",
  },
  priorityC: {
    background:
      "linear-gradient(300deg, rgba(0,128,0,0.6) 0%, rgba(0,128,0,0.9) 100%)",
  },
});

const PriorityBtns = (props) => {
  const classes = customStyles();
  return (
    <Box>
      <ButtonGroup className={classes.buttonGroup}>
        <Button className={classes.priorityA}>A</Button>
        <Button className={classes.priorityB}>B</Button>
        <Button className={classes.priorityC}>C</Button>
      </ButtonGroup>
    </Box>
  );
};

export default PriorityBtns;
