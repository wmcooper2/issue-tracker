import React from "react";
import { Link } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

import { EDIT_ISSUE_ENDPOINT } from "../utilities/constants";

const customStyles = makeStyles({
    editBtn: {
        marginRight: "1.5rem",
    }
});

const EditButton = () => {
    const styles = customStyles();
    return (
        <Link to={EDIT_ISSUE_ENDPOINT}>
            <Fab size="small" aria-label="add" className={styles.editBtn}>
                <EditIcon />
            </Fab>
        </Link>
    );
};

export default EditButton;