import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Box from "@material-ui/core/Box";
// import FormGroup from "@material-ui/core/FormGroup";
// import Input from "@material-ui/core/Input";
// import PriorityBtns from "./priorityBtns";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import fetch from "isomorphic-fetch";

const customStyles = makeStyles({
  projectDashboard: {},
  bugButton: { backgroundColor: "blue" },
  featureButton: { backgroundColor: "purple" },
});

const BugFeatureBtns = (props) => {
  const classes = customStyles();
  return (
    <ButtonGroup size="medium">
      <Button
        className={classes.bugButton}
        onClick={() =>
          fetch("https://wmcooper2.com/bug-tracker-api/bugs")
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
          fetch("https://wmcooper2.com/bug-tracker-api/features")
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

export default BugFeatureBtns;