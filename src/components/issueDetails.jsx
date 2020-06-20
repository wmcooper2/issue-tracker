import React from "react";
import Box from "@material-ui/core/Box";
import IssueDates from "./issueDates";
import IssuePeople from "./issuePeople";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  details: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
  },
});

const IssueDetails = ({ issue }) => {
  const styles = customStyles();
  return (
    <Box component="div" className={styles.details}>
      <Box>
        <IssueDates></IssueDates>
      </Box>
      <Box>
        <IssuePeople></IssuePeople>
      </Box>
    </Box>
  );
};

export default IssueDetails;
