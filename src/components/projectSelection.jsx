import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const ProjectSelection = () => {
    return (
        <FormControl>
            <InputLabel>Project</InputLabel>
            <Select>
                <MenuItem>Birds</MenuItem>
                <MenuItem>Cats</MenuItem>
                <MenuItem>Dogs</MenuItem>
            </Select>

        </FormControl>

    )
};

export default ProjectSelection;