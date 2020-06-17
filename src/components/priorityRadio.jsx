import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  PRIORITY_A,
  PRIORITY_B,
  PRIORITY_C,
  PRIORITY_A_GRADIENT,
} from "../utilities/constants";

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

export const PriorityRadio = ({ issue }) => {
  const classes = customStyles();
  console.log("PriorityRad,", issue);

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="A"
          control={
            <Radio
              color="primary"
            //   checked={issue.priority === PRIORITY_A ? "true" : "false"}
            />
          }
          label="A"
          labelPlacement="bottom"
          className={classes.priorityA}
        ></FormControlLabel>

        <FormControlLabel
          value="B"
          control={
            <Radio
              color="primary"
            //   checked={issue.priority === PRIORITY_B ? "true" : "false"}
            />
          }
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

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PriorityRadio);
