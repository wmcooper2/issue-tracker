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
import { chooseProject } from "../redux/actions";


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

const ProjectSelection = ({ projectClick }) => {
    const [open, showDialog] = useState(false);
    // const styles = customStyles();
    const openDialog = () => {
        showDialog(true);
    };

    const closeDialog = () => {
        showDialog(false);
    };

    return (
        <Box>
            <Button onClick={openDialog}>Project Menu</Button>
            <Dialog open={open}>
                <DialogTitle>Choose a project</DialogTitle>
                <DialogContent>
                    <MenuItems handleClick={projectClick} closeDialog={closeDialog}></MenuItems>
                </DialogContent>
                <Button onClick={closeDialog} color="secondary">Cancel</Button>

            </Dialog>
        </Box>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    projectClick: (project) => {
        dispatch(chooseProject(project));
    },
});

ProjectSelection.propTypes = {
    projectClick: PropTypes.func,
};


// export default ProjectSelection;
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelection);