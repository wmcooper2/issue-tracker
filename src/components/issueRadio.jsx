import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { BUG, FEATURE } from "../utilities/constants";

const customStyles = makeStyles({
  buttonGroup: { minHeight: "10mm", margin: "1rem" },
  bug: {
    background:
      "linear-gradient(300deg, rgba(0,0,255,0.3) 0%, rgba(0,0,255,0.6) 100%)",
    borderRadius: "10%",
  },
  feature: {
    background:
      "linear-gradient(300deg, rgba(128,0,128,0.3) 0%, rgba(128,0,128,0.6) 100%)",
    borderRadius: "10%",
  },
});


export const IssueRadio = ({ issue }) => {
  const classes = customStyles();

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="issueType"
        name="issueType"
        defaultValue="top"
      >

        <FormControlLabel
          value={BUG}
          control={
            issue === "NONE" ? (
              <Radio color="default" />
            ) : (
                <Radio
                  color="default"
                  checked={issue.issueType === BUG ? true : false}
                />
              )
          }
          label={BUG}
          labelPlacement="bottom"
          className={classes.bug}
        ></FormControlLabel>

        <FormControlLabel
          value={FEATURE}
          control={
            issue === "NONE" ? (
              <Radio color="default" />
            ) : (
                <Radio
                  color="default"
                  checked={issue.issueType === FEATURE ? true : false}
                />
              )
          }
          label={FEATURE}
          labelPlacement="bottom"
          className={classes.feature}
        ></FormControlLabel>
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = ({ issue }) => ({
  issue,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssueRadio);
