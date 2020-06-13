import React from "react";
// import "./App.css";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import { HashRouter, Switch, Route } from "react-router-dom";

const App = (props) => {
  // return <LogIn></LogIn>;
  return (
    <Box className="App">
      <AppHeader></AppHeader>
      <HashRouter>
        <BugFeatureBtnLinks></BugFeatureBtnLinks>
        <Switch>
          <Route path="/add-bug">
            <AddBug></AddBug>
          </Route>
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </HashRouter>
    </Box>
  );
};

export default App;
