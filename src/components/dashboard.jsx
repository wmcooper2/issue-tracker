import React from "react";
import IssueTable from "./issueTable";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";

const customStyles = makeStyles({
  projectDashboard: {},
  bugButton: { backgroundColor: "blue" },
  featureButton: { backgroundColor: "purple" },
  priorityA: { backgroundColor: "red" },
  priorityB: { backgroundColor: "yellow" },
  priorityC: { backgroundColor: "green" },
});

const Dashboard = (props) => {
  const classes = customStyles();
  return (
    <React.Fragment>
      <Box className={classes.projectDashboard}>
        <IssueTable></IssueTable>
      </Box>

      <Box>
        Summary example Bilge rat nipperkin crimp gunwalls blow the man down
        hearties cackle fruit no prey, no pay topgallant clipper. Aye scourge of
        the seven seas broadside jolly boat nipper gaff run a shot across the
        bow gangplank gibbet long clothes. Ho long clothes Spanish Main hands
        fire in the hole bilge water sheet tender doubloon American Main. Booty
        salmagundi yo-ho-ho no prey, no pay lugsail tackle Arr rutters lass
        matey. Gabion scuppers spanker hang the jib walk the plank pressgang
        parrel lass hogshead brig. Chase guns coxswain jib rutters Shiver me
        timbers hornswaggle gally log flogging bilge water. Topsail prow
        marooned belay keelhaul spyglass Nelsons folly gunwalls dance the hempen
        jig lugger. Pillage lateen sail gunwalls bilge water gun spanker six
        pounders fore Blimey draught. Ballast loot gaff gun brig Davy Jones'
        Locker Plate Fleet landlubber or just lubber hornswaggle trysail.
      </Box>

      <List>
        <ListItemText>Make Favicon icon</ListItemText>
        <ListItemText>Flesh out the data structure in the DB</ListItemText>
      </List>
    </React.Fragment>
  );
};

// export default connect()(Dashboard);
export default Dashboard;
