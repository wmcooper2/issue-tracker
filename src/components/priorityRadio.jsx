import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { PRIORITY_A, PRIORITY_B, PRIORITY_C } from "../utilities/constants";

const customStyles = makeStyles({
  buttonGroup: { minHeight: "10mm", margin: "1rem" },
  priorityA: {
    background:
      "linear-gradient(300deg, rgba(255,0,0,0.3) 0%, rgba(255,0,0,0.6) 100%)",
    borderRadius: "10%",
  },
  priorityB: {
    background:
      "linear-gradient(300deg, rgba(255,255,0,0.3) 0%, rgba(255,255,0,0.6) 100%)",
    borderRadius: "10%",
  },
  priorityC: {
    background:
      "linear-gradient(300deg, rgba(0,128,0,0.3) 0%, rgba(0,128,0,0.6) 100%)",
    borderRadius: "10%",
  },
});

export const PriorityRadio = ({ issue }) => {
  const classes = customStyles();
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="priority" name="priority" defaultValue={PRIORITY_A}>
        <FormControlLabel
          value={PRIORITY_A}
          control={
            issue === "NONE" ? (
              <Radio color="default" />
            ) : (
                <Radio
                  color="default"
                  checked={issue.priority === PRIORITY_A ? true : false}
                />
              )
          }
          label={PRIORITY_A}
          labelPlacement="bottom"
          className={classes.priorityA}
        ></FormControlLabel>


        <FormControlLabel
          value={PRIORITY_B}
          control={
            issue === "NONE" ? (
              <Radio color="default" />
            ) : (
                <Radio
                  color="default"
                  checked={issue.priority === PRIORITY_B ? true : false}
                />
              )
          }
          label={PRIORITY_B}
          labelPlacement="bottom"
          className={classes.priorityB}
        ></FormControlLabel>

        <FormControlLabel
          value={PRIORITY_C}
          control={
            issue === "NONE" ? (
              <Radio color="default" />
            ) : (
                <Radio
                  color="default"
                  checked={issue.priority === PRIORITY_C ? true : false}
                />
              )
          }
          label={PRIORITY_C}
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
