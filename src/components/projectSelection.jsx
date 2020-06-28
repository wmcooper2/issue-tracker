import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { PROJECTS } from "../utilities/constants";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { chooseProject } from "../redux/actions";

const customStyles = makeStyles({
    menuName: {
        width: "100mm",
    },
    item: {

    },
});

const MenuItems = (props) => {
    const { handleClick } = props;
    return PROJECTS.map((item, index) => (
        <MenuItem onClick={() => handleClick(item)} key={index}>
            {item}
        </MenuItem >
    ));
};

// original
const ProjectSelection2 = () => {
    const styles = customStyles();
    return (
        <Box>
            <FormControl className={styles.menuName} >
                <InputLabel>Project</InputLabel>
                <Select>
                    <MenuItems></MenuItems>
                </Select>
            </FormControl>
        </Box>
    )
};

const ProjectSelection = ({ projectClick }) => {
    const [open, showDialog] = useState(false);
    // const styles = customStyles();


    const openDialog = () => {
        showDialog(true);
    }

    const closeDialog = () => {
        showDialog(false);
    }

    return (
        <Box>
            <Button onClick={openDialog}>Project Menu</Button>
            <Dialog open={open}>
                <DialogTitle>Choose a project</DialogTitle>
                <DialogContent>
                    <MenuItems handleClick={projectClick}></MenuItems>
                </DialogContent>
                <Button onClick={closeDialog} color="secondary">Cancel</Button>

            </Dialog>
        </Box>
    )
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    // projectClick: (project) => dispatch(chooseProject(project)),
    projectClick: (project) => console.log("PROJECT;", project),
    // projectClick: () => console.log("PROJECT Clicked"),

});

// export default ProjectSelection;
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelection);