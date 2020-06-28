import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FeatureButton from "./featureButton";
import BugButton from "./bugButton";

const customStyles = makeStyles({
    buttonGroup: { minHeight: "10mm", margin: "1rem" },
    bugButton: {
        background:
            "linear-gradient(300deg, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.9) 100%)",
    },
    featureButton: {
        background:
            "linear-gradient(300deg, rgba(128,0,128,0.6) 0%, rgba(128,0,128,0.9) 100%)",
    },
    linkStyle: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "black",
        cursor: "pointer",
        textDecoration: "none",
    },
});

const IssueBtns = () => {
    const classes = customStyles();
    return (
        <React.Fragment>
            <ButtonGroup className={classes.buttonGroup}>
                <BugButton></BugButton>
                <FeatureButton></FeatureButton>
            </ButtonGroup>
        </React.Fragment>
    );
};

const mapStateToProps = ({ issueType }) => ({
    issueType,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssueBtns);
