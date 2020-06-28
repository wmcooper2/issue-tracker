import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { LOGIN_URL } from "../constants";

const customStyles = makeStyles({
    registerScreen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "100vh",
    },

    registerForm: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "100mm",
        maxHeight: "100mm",
        alignItems: "center",
        margin: "auto auto",
    },
});

const Register = () => {
    const classes = customStyles();
    return (
        <Box className={classes.registerScreen} fixed="true">
            <form className={classes.registerForm} action={LOGIN_URL} method="POST">
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

export default Register;
