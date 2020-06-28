import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { togglePriorityA, togglePriorityB, togglePriorityC } from "../redux/actions";

const customStyles = makeStyles({
    buttonGroup: { minHeight: "10mm", margin: "1rem" },
    priorityADark: {
        background:
      "linear-gradient(300deg, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0.9) 100%)",
    },
    priorityBDark: {
        background:
      "linear-gradient(300deg, rgba(255,255,0,0.6) 0%, rgba(255,255,0,0.9) 100%)",
    },
    priorityCDark: {
        background:
      "linear-gradient(300deg, rgba(0,128,0,0.6) 0%, rgba(0,128,0,0.9) 100%)",
    },

    priorityALight: {
        background:
      "linear-gradient(300deg, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0.5) 100%)",
    },
    priorityBLight: {
        background:
      "linear-gradient(300deg, rgba(255,255,0,0.2) 0%, rgba(255,255,0,0.5) 100%)",
    },
    priorityCLight: {
        background:
      "linear-gradient(300deg, rgba(0,128,0,0.2) 0%, rgba(0,128,0,0.5) 100%)",
    },
});

const PriorityBtns = ({
    priorityAClick,
    priorityBClick,
    priorityCClick,
    priorityASelected,
    priorityBSelected,
    priorityCSelected }) => {
    const classes = customStyles();
    return (
        <Box>
            <ButtonGroup className={classes.buttonGroup}>
                <Button
                    className={priorityASelected ? classes.priorityADark : classes.priorityALight}
                    onClick={() => priorityAClick()}
                >A</Button>
                <Button
                    className={priorityBSelected ? classes.priorityBDark : classes.priorityBLight}
                    onClick={() => priorityBClick()}>B</Button>
                <Button
                    className={priorityCSelected ? classes.priorityCDark : classes.priorityCLight}
                    onClick={() => priorityCClick()}>C</Button>
            </ButtonGroup>
        </Box>
    );
};

const mapStateToProps = ({ priorityASelected, priorityBSelected, priorityCSelected }) => ({
    priorityASelected,
    priorityBSelected,
    priorityCSelected
});

const mapDispatchToProps = (dispatch) => ({
    priorityAClick: () => dispatch(togglePriorityA()),
    priorityBClick: () => dispatch(togglePriorityB()),
    priorityCClick: () => dispatch(togglePriorityC()),
});

PriorityBtns.propTypes = {
    priorityAClick: PropTypes.func,
    priorityBClick: PropTypes.func,
    priorityCClick: PropTypes.func,
    priorityASelected: PropTypes.bool,
    priorityBSelected: PropTypes.bool,
    priorityCSelected: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriorityBtns);
