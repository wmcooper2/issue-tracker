import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

export const PriorityRadio = () => {
  const classes = customStyles();
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="A"
          control={<Radio color="primary" />}
          label="A"
          labelPlacement="bottom"
          className={classes.priorityA}
        ></FormControlLabel>

        <FormControlLabel
          value="B"
          control={<Radio color="primary" />}
          label="B"
          labelPlacement="bottom"
          className={classes.priorityB}
        ></FormControlLabel>

        <FormControlLabel
          value="C"
          control={<Radio color="primary" />}
          label="C"
          labelPlacement="bottom"
          className={classes.priorityC}
        ></FormControlLabel>
      </RadioGroup>
    </FormControl>
  );
};

export default PriorityRadio;
