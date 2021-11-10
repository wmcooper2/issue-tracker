import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { PRIORITY_A, PRIORITY_B, PRIORITY_C } from "../utilities/constants";

let customStyles = makeStyles({
    // buttonGroup: { minHeight: "10mm", margin: "1rem" },
    buttonGroup: { minHeight: "10mm" },
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
        // background:
            // "linear-gradient(300deg, rgba(0,128,0,0.3) 0%, rgba(0,128,0,0.6) 100%)",
        borderRadius: "10%",
    },
});

export let PriorityRadio = ({ issue }) => {
    let classes = customStyles();
    return (
        <FormControl component="fieldset">
            {/* <RadioGroup row aria-label="priority" name="priority" defaultValue={issue.priority ? issue.priority: " "} value={issue.priority ? issue.priority : " "}> */}
            {/* <RadioGroup row aria-label="priority" name="priority" value={issue.priority ? issue.priority : " "}> */}
            {/* <RadioGroup row aria-label="priority" name="priority"> */}
            {/* <RadioGroup row aria-label="priority" name="priority"> */}

                <FormControlLabel
                    value={PRIORITY_A}
                    // value={PRIORITY_A ? PRIORITY_A : " "}
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
                    // value={PRIORITY_B ? PRIORITY_B : " "}
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
                    // value={PRIORITY_C ? PRIORITY_C : " "}
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
            {/* </RadioGroup> */}
        </FormControl>
    );
};

let mapStateToProps = ({ issue }) => ({
    issue,
});

let mapDispatchToProps = () => ({});

PriorityRadio.propTypes = {
    issue: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriorityRadio);
