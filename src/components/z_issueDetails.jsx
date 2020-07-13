
import React from "react";
import Box from "@material-ui/core/Box";
import IssueDates from "./issueDates";
import IssuePeople from "./issuePeople";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
});

const IssueDetails = () => {
    const styles = customStyles();
    return (
        <Box component="div" className={styles.details}>
            <IssueDates></IssueDates>
            <IssuePeople></IssuePeople>
        </Box>
    );
};


export default IssueDetails;
