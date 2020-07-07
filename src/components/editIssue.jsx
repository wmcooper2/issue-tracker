import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { BUG, FEATURE, EDIT_ISSUE_URL } from "../utilities/constants";
import { PRIORITY_A, PRIORITY_B, PRIORITY_C } from "../utilities/constants";

import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const customStyles = makeStyles({
    bugFeatureBox: { display: "flex" },
    inputStyle: { width: "100%", minWidth: "50vw" },
    textAreaStyle: { resize: "vertical", minWidth: "50vw" },
    issueForm: {
        width: "50vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1rem",
    },
    pageTitle: {
        textAlign: "center",
    },
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

const EditIssue = ({ issue, issueType, project }) => {
    const styles = customStyles();
    let history = useHistory();
    // const { issue, issueType, project } = props;
    const name = issue.name !== undefined ? issue.name : undefined;
    const projectName = project !== undefined ? project : undefined;
    const description =
        issue.description !== undefined ? issue.description : undefined;
    const category = issue.category !== undefined ? issue.category : undefined;
    const version = issue.version !== undefined ? issue.version : undefined;
    const id = issue._id !== undefined ? issue._id : undefined;

    const [stateName, changeName] = useState(name);
    const [stateProjectName, changeProjectName] = useState(projectName);
    const [stateCategory, changeCategory] = useState(category);
    const [stateDescription, changeDescription] = useState(description);
    const [stateVersion, changeVersion] = useState(version);
    const [stateID, changeID] = useState(id);
    const [stateIssueType, changeIssueType] = useState(BUG);
    const [statePriority, changePriority] = useState(PRIORITY_A);
    const [stateClosed, changeClosed] = useState(false);

    const changeState = (event) => {
        const e = event.target.name;
        const v = event.target.value;
        switch (e) {
            case "issueName":
                changeName(v);
                break;
            case "projectName":
                changeProjectName(v);
                break;
            case "category":
                changeCategory(v);
                break;
            case "description":
                changeDescription(v);
                break;
            case "version":
                changeVersion(v);
                break;
            case "issueid":
                changeID(v);
                break;
            case "issueType":
                changeIssueType(v);
                break;
            case "priority":
                changePriority(v);
                break;
            case "closeIssue":
                changeClosed(!stateClosed);
                break;
            default:
                return;
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch(EDIT_ISSUE_URL, {
            method: "POST",
            body: JSON.stringify({
                issueName: stateName,
                projectName: stateProjectName,
                issueType: stateIssueType,
                category: stateCategory,
                priority: statePriority,
                version: stateVersion,
                description: stateDescription,
                closeIssue: stateClosed,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then()
            .catch(error => console.error(error));
        history.push("/");
    };

    return (
        <Box className={styles.issueForm}>
            <form onSubmit={handleFormSubmit} >
                <Typography variant="h3" className={styles.pageTitle}>
                    Edit Issue
                </Typography>
                <FormGroup>

                    <Box component="div">
                        Name:
                        <Input
                            variant="outlined"
                            name="issueName"
                            className={styles.inputStyle}
                            defaultValue={stateName}
                            inputProps={{
                                maxLength: 200,
                            }}
                            onChange={changeState}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        Project:
                        <Input
                            variant="outlined"
                            name="projectName"
                            className={styles.inputStyle}
                            defaultValue={stateProjectName}
                            inputProps={{
                                maxLength: 200,
                            }}
                            onChange={changeState}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        Category:
                        <Input
                            variant="outlined"
                            name="category"
                            className={styles.inputStyle}
                            defaultValue={stateCategory}
                            inputProps={{
                                maxLength: 50,
                            }}
                            onChange={changeState}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        Version:
                        <Input
                            readOnly={true}
                            name="version"
                            className={styles.inputStyle}
                            defaultValue={stateVersion}
                            inputProps={{
                                maxLength: 10,
                            }}
                            onChange={changeState}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        ID:
                        <Input
                            readOnly={true}
                            value={stateID}
                            name="issueid"
                            className={styles.inputStyle}
                            inputProps={{
                                maxLength: 30,
                            }}
                            onChange={changeState}
                            required
                        ></Input>
                    </Box>

                    <Box className={styles.bugFeatureBox}>
                        <Box component="div">
                            Type:
                            {/* <IssueRadio></IssueRadio> */}
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    aria-label="issueType"
                                    name="issueType"
                                    defaultValue={stateIssueType}
                                    onChange={changeState}
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
                                        className={styles.bug}
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
                                        className={styles.feature}
                                    ></FormControlLabel>
                                </RadioGroup>
                            </FormControl>

                        </Box>

                        <Box component="div">
                            Priority:
                            {/* <PriorityRadio></PriorityRadio> */}
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    aria-label="priority"
                                    name="priority"
                                    defaultValue={statePriority}
                                    onChange={changeState}
                                >

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
                                        className={styles.priorityA}
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
                                        className={styles.priorityB}
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
                                        className={styles.priorityC}
                                    ></FormControlLabel>
                                </RadioGroup>
                            </FormControl>


                        </Box>
                    </Box>
                </FormGroup>

                <FormGroup>
                    <Box>
                        Description:
                        <TextareaAutosize
                            name="description"
                            className={styles.textAreaStyle}
                            defaultValue={stateDescription}
                            inputProps={{
                                maxLength: 1000,
                            }}
                            onChange={changeState}
                            required
                        ></TextareaAutosize>
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

                <FormGroup>
                    <FormControlLabel
                        label="Close Issue"
                        onChange={changeState}
                        control={
                            <Checkbox
                                color="Secondary"
                                checked={stateClosed}
                                // value={true}
                                name="closeIssue"
                            ></Checkbox>
                        }
                    ></FormControlLabel>

                    <Button variant="contained" color="primary" name="submit" type="submit">
                        Submit {issueType}
                    </Button>
                </FormGroup>
            </form>
        </Box>
    );
};

const mapStateToProps = ({ issueType, issue, project }) => ({
    issueType,
    issue,
    project,
});

const mapDispatchToProps = ({ dispatch }) => ({ dispatch });

EditIssue.propTypes = {
    issueType: PropTypes.string,
    issue: PropTypes.object,
    project: PropTypes.string,
    dispatch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditIssue);
