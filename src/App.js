import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const simpleLog = (props) => {
  console.log(props);
};

function App() {
  return (
    <Box className="App">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h2">Bug Tracker</Typography>
        </Toolbar>
      </AppBar>

      <Box className="project-dashboard">
        <ButtonGroup size="medium">
          <Button
            onClick={() => fetch("https://tokyopython.com/bugs").then((res) =>
              simpleLog(res)
            )}
          >
            Bug
          </Button>
          <Button>Feature</Button>
        </ButtonGroup>

        <Box>
          <ButtonGroup>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
          </ButtonGroup>
        </Box>

        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>One-liner</TableCell>
                  <TableCell>Views</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Example of a bug description</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Example of a bug description</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Example of a bug description</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          Summary example Bilge rat nipperkin crimp gunwalls blow the man down
          hearties cackle fruit no prey, no pay topgallant clipper. Aye scourge
          of the seven seas broadside jolly boat nipper gaff run a shot across
          the bow gangplank gibbet long clothes. Ho long clothes Spanish Main
          hands fire in the hole bilge water sheet tender doubloon American
          Main. Booty salmagundi yo-ho-ho no prey, no pay lugsail tackle Arr
          rutters lass matey. Gabion scuppers spanker hang the jib walk the
          plank pressgang parrel lass hogshead brig. Chase guns coxswain jib
          rutters Shiver me timbers hornswaggle gally log flogging bilge water.
          Topsail prow marooned belay keelhaul spyglass Nelsons folly gunwalls
          dance the hempen jig lugger. Pillage lateen sail gunwalls bilge water
          gun spanker six pounders fore Blimey draught. Ballast loot gaff gun
          brig Davy Jones' Locker Plate Fleet landlubber or just lubber
          hornswaggle trysail.
        </Box>
      </Box>

      <List>
        <ListItemText>Make Favicon icon</ListItemText>
        <li>Install react-router</li>
        <li>Install helmet</li>
        <li>Install mongoDB</li>
        <li>Install passport</li>
        <li>Install Material UI</li>
        <li>Flesh out the data structure in the DB</li>
        <li>Make API endpoints and test them (CRUD)</li>
        <li>Test out fetch() in the app</li>
      </List>
    </Box>
  );
}

export default App;
