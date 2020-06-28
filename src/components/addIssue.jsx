import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import IssueRadio from "./issueRadio";
import List from "@material-ui/core/List";
import PriorityRadio from "./priorityRadio";
import PropTypes from "prop-types";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ADD_ISSUE_URL } from "../utilities/constants";

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
});

const AddIssue = (props) => {
    const styles = customStyles();
    const { issue, issueType, project } = props;
    const name = issue.name !== undefined ? issue.name : undefined;
    const description =
        issue.description !== undefined ? issue.description : undefined;
    const category = issue.category !== undefined ? issue.category : undefined;
    const version = issue.version !== undefined ? issue.version : undefined;
    const id = issue._id !== undefined ? issue._id : undefined;

    console.log("project:", project);
    return (

        < Box className={styles.issueForm} >
            <form
                action={`${ADD_ISSUE_URL}/${project}`}
                method="POST"
            >
                <Typography variant="h3" className={styles.pageTitle}>
                    Add Issue
                </Typography>
                <FormGroup>
                    <Box component="div">
                        Name:
                        <Input
                            variant="outlined"
                            name="issueName"
                            className={styles.inputStyle}
                            defaultValue={name}
                            inputProps={{
                                maxLength: 200,
                            }}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        Category:
                        <Input
                            variant="outlined"
                            name="category"
                            className={styles.inputStyle}
                            defaultValue={category}
                            inputProps={{
                                maxLength: 50,
                            }}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        Version:
                        <Input
                            readOnly={true}
                            defaultValue={version}
                            name="version"
                            className={styles.inputStyle}
                            inputProps={{
                                maxLength: 10,
                            }}
                            required
                        ></Input>
                    </Box>

                    <Box component="div">
                        ID:
                        <Input
                            readOnly={true}
                            value={id}
                            name="issueid"
                            className={styles.inputStyle}
                            inputProps={{
                                maxLength: 30,
                            }}
                            required
                        ></Input>
                    </Box>

                    <Box className={styles.bugFeatureBox}>
                        <Box component="div">
                            Type:
                            <IssueRadio></IssueRadio>
                        </Box>

                        <Box component="div">
                            Priority:
                            <PriorityRadio></PriorityRadio>
                        </Box>
                    </Box>
                </FormGroup>

                <FormGroup>
                    <Box>
                        Description:
                        <TextareaAutosize
                            defaultValue={description}
                            name="description"
                            className={styles.textAreaStyle}
                            inputProps={{
                                maxLength: 1000,
                            }}
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
                <Button variant="contained" color="primary" name="submit" type="submit">
                    Submit {issueType}
                </Button>
            </form>
        </Box >
    );
};

const mapStateToProps = ({ issueType, issue, project }) => ({
    issueType,
    issue,
    project,
});

const mapDispatchToProps = () => ({});

AddIssue.propTypes = {
    issueType: PropTypes.string,
    issue: PropTypes.object,
    project: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
