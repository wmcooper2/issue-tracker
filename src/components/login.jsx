import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
    screen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "100vh",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "100mm",
        maxHeight: "100mm",
        alignItems: "center",
        margin: "auto auto",
    },
});

const LogIn = () => {
    const classes = customStyles();
    return (
        <Box className={classes.screen} fixed="true">
            <form className={classes.form} action={"/issue-tracker/login"} method="POST">
                <FormGroup>
                    <Input defaultValue="User Name" variant="outlined"></Input>
                    <Input defaultValue="Password" variant="outlined"></Input>
                </FormGroup>
                <Input type="submit" value="Login"></Input>
            </form>
        </Box>
    );
};

const Register = () => {
    const classes = customStyles();
    return (
        <Box className={classes.screen} fixed="true">
            <form className={classes.form} action={"/issue-tracker/login"} method="POST">
                <FormGroup>
                    <Input defaultValue="User Name" variant="outlined"></Input>
                    <Input defaultValue="Password" variant="outlined"></Input>
                </FormGroup>
                <Input type="submit" value="Register">
                    Register
                </Input>
            </form>
        </Box>
    );
};

export default {LogIn, Register};