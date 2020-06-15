import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import fetch from "isomorphic-fetch";

const customStyles = makeStyles({
  projectDashboard: {},
  bugButton: { backgroundColor: "blue" },
  featureButton: { backgroundColor: "purple" },
});

const IssueBtns = (props) => {
  const classes = customStyles();
  return (
    <ButtonGroup size="medium">
      <Button
        className={classes.bugButton}
        onClick={() =>
          fetch("https://wmcooper2.com/issue-tracker-api/issues")
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error))
        }
      >
        Bug
      </Button>
      <Button
        className={classes.featureButton}
        onClick={() =>
          fetch("https://wmcooper2.com/issue-tracker-api/features")
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error))
        }
      >
        Feature
      </Button>
    </ButtonGroup>
  );
};

export default IssueBtns;
