import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeButton from "./homeButton";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { PROJECTS } from "../utilities/constants";
import { connect } from "react-redux";
import { chooseProject, updateIssues } from "../redux/actions";
import { ISSUES_URL } from "../utilities/constants";
import { makeStyles } from "@material-ui/core/styles";


const MenuItems = (props) => {
    const { handleClick, closeDialog } = props;
    return PROJECTS.map((item, index) => (
        <MenuItem onClick={() => {
            handleClick(item);
            closeDialog();
        }
        } key={index}>
            {item}
        </MenuItem >
    ));
};

const customStyles = makeStyles({
    header: {
        backgroundColor: "seagreen",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
});

const AppHeader = ({ projectClick, project }) => {
    const styles = customStyles();
    const [open, showDialog] = useState(false);
    const openDialog = () => {showDialog(true)};
    const closeDialog = () => {showDialog(false)};

    return (
        <AppBar position="relative" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <HomeButton></HomeButton>
                <Box>
                    <Button onClick={openDialog}>
                        <Typography variant="h2">{project}</Typography>
                    </Button>
                    <Dialog open={open}>
                        <DialogTitle>
                            Choose a project</DialogTitle>
                        <DialogContent>
                            <MenuItems handleClick={projectClick} closeDialog={closeDialog}></MenuItems>
                        </DialogContent>
                        <Button onClick={closeDialog} color="secondary">Cancel</Button>
                    </Dialog>
                </Box>
                <Box>Welcome, Guest.</Box>
            </Toolbar>
        </AppBar>
    );
};

AppHeader.propTypes = {
    projectClick: PropTypes.func,
    project: PropTypes.string,
};

const mapStateToProps = ({ project }) => ({
    project,
});

const mapDispatchToProps = (dispatch) => ({
    projectClick: (project) => {
        dispatch(chooseProject(project));
        fetch(`${ISSUES_URL}/${project}`)
            .then((response) => response.json())
            .then((results) => dispatch(updateIssues(results)))
            .catch((error) => console.error(error));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);