import React from "react";
// import "./App.css";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import { HashRouter, Switch, Route } from "react-router-dom";
import fetch from "isomorphic-fetch";

//add redux
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: null,
    };
  }

  componentDidMount() {
    fetch("https://wmcooper2.com/bug-tracker-api/bugs")
      .then((response) => response.json())
      .then((result) => {
        // console.log("BUGS: ", result);
        this.setState({
          bugs: result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
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
              <Dashboard {...this.state}></Dashboard>
            </Route>
          </Switch>
        </HashRouter>
      </Box>
    );
  }
}

export default App;
