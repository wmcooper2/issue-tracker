import React from "react";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import EditButton from "./editButton";
import IssueDates from "./issueDates";
import IssuePeople from "./issuePeople";

const customStyles = makeStyles({
    name: {
        width: "100%",
        margin: "1.5rem",
    },
    description: {
        display: "flex",
        padding: "1rem",
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "1rem",
    },
});


const Messages = ({ issue }) => {
    let messages = issue.messages.map((item, index) => {
        return (
            <Box key={index}>
                {item}
            </Box>
        );
    });
    return messages;
};


const FullDetails = ({ issue }) => {
    const styles = customStyles();
    return (
        <React.Fragment>
            <HashRouter>
                <Paper>
                    <Box className={styles.name}>
                        <Typography variant="h5">
                            <EditButton></EditButton>
                            {issue.name}
                        </Typography>
                    </Box>

                    <Box className={styles.details}>
                        <IssueDates></IssueDates>
                        <IssuePeople></IssuePeople>
                    </Box>

                    <Box>
                        {issue.description}
                    </Box>
                    <Box>
                        messages
                        {/* <Messages issue={issue}></Messages> */}
                    </Box>
                </Paper>
            </HashRouter>
        </React.Fragment>
    );
};

const mapStateToProps = ({ issue }) => ({
    issue,
});

const mapDispatchToProps = () => ({});

FullDetails.propTypes = {
    issue: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullDetails);