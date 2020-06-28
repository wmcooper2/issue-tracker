import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { PROJECTS } from "../utilities/constants";

const MenuItems = () => {
    return PROJECTS.map((item, index) => (
        <MenuItem>
            {item}
        </MenuItem >
    ));
};

const ProjectSelection = () => {
    return (
        <FormControl>
            <InputLabel>Project</InputLabel>
            <Select>
                <MenuItems></MenuItems>
            </Select>
        </FormControl >

    )
};

export default ProjectSelection;