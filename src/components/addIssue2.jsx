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

import { connect } from "react-redux";
import { Typography } from "@material-ui/core";


class AddIssue2 extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
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
        };

        this.issue = props.issue;
        this.issueType = props.issueType;
        this.project = props.project;
        this.name = this.issue.name !== undefined ? this.issue.name : undefined;
        this.projectName = this.project !== undefined ? this.project : undefined;
        this.description =
            this.issue.description !== undefined ? this.issue.description : undefined;
        this.category = this.issue.category !== undefined ? this.issue.category : undefined;
        this.version = this.issue.version !== undefined ? this.issue.version : undefined;
        this.id = this.issue._id !== undefined ? this.issue._id : undefined;
        this.submitForm = this.submitForm.bind(this);
    }


    submitForm(event) {
        console.log("submitting form...");
        console.log(event);
    }

    render() {
        return (

            < Box className={this.styles.issueForm} >
                <form
                    // action={ADD_ISSUE_URL}
                    // action={() => submitForm()}
                    onSubmit={() => this.submitForm()}
                // onSubmit={() => console.log("clicked submit...")}
                // method="POST"
                >
                    <Typography variant="h3" className={this.styles.pageTitle}>
                        Add Issue
                    </Typography>
                    <FormGroup>

                        <Box component="div">
                            Name:
                            <Input
                                variant="outlined"
                                name="issueName"
                                className={this.styles.inputStyle}
                                defaultValue={this.name}
                                inputProps={{
                                    maxLength: 200,
                                }}
                                required
                            ></Input>
                        </Box>

                        <Box component="div">
                            Project:
                            <Input
                                variant="outlined"
                                name="projectName"
                                className={this.styles.inputStyle}
                                defaultValue={this.projectName}
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
                                className={this.styles.inputStyle}
                                defaultValue={this.category}
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
                                defaultValue={this.version}
                                name="version"
                                className={this.styles.inputStyle}
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
                                value={this.id}
                                name="issueid"
                                className={this.styles.inputStyle}
                                inputProps={{
                                    maxLength: 30,
                                }}
                                required
                            ></Input>
                        </Box>

                        <Box className={this.styles.bugFeatureBox}>
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
                                defaultValue={this.description}
                                name="description"
                                className={this.styles.textAreaStyle}
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
                        Submit {this.issueType}
                    </Button>
                </form>
            </Box >
        );
    }
}

const mapStateToProps = ({ issueType, issue, project }) => ({
    issueType,
    issue,
    project,
});

const mapDispatchToProps = () => ({});

AddIssue2.propTypes = {
    issueType: PropTypes.string,
    issue: PropTypes.object,
    project: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue2);
