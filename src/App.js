import React from "react";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { changeToBugs, changeToFeatures, updateIssues } from "./redux/actions";
import { issues, issueType } from "./redux/reducers";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// const store = createStore(issueReducer);
const store = createStore(combineReducers({ issues, issueType }), initialState);
console.log("Initial Store:", store.getState());

class App extends React.Component {
  componentDidMount() {
    fetch("https://wmcooper2.com/bug-tracker-api/bugs")
      .then((response) => response.json())
      .then((result) => {
        console.log("Action updateIssues, fetch:", result);

        console.log("Before dispatch, store:", store.getState());
        const testaction = [
          { type: "UPDATE_ISSUES", issues: [{name: "direct test", _id: "fake id" }]},
        ];
        // store.dispatch(updateIssues(testaction));

        store.dispatch(updateIssues(result));

        // store.dispatch(changeToFeatures());
        // store.dispatch(changeToBugs());
        console.log("After dispatch, store:", store.getState());
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
