import React from "react";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { changeToBugs, updateIssues } from "./redux/actions";
// import { updateIssues } from "./redux/actions";
import {
  issuesReducer,
  issueType,
  selectIssueReducer,
  priorityReducer,
} from "./redux/reducers";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// combineReducers({ issuesReducer, issueType, selectIssueReducer }),
const store = createStore(
  combineReducers({
    issues: issuesReducer,
    issueType: issueType,
    issue: selectIssueReducer,
    priority: priorityReducer,
  }),
  initialState
);

class App extends React.Component {
  componentDidMount() {
    fetch("https://wmcooper2.com/bug-tracker-api/bugs")
      .then((response) => response.json())
      .then((result) => {
        // console.log("Fetch result:", result);
        let issues = updateIssues(result);
        // console.log("Fetch issues:", issues);
        store.dispatch(issues);
        // store.dispatch(updateIssues(result));
      })
      .catch((error) => {
        console.error(error);
      });
    store.dispatch(changeToBugs());

    // console.log("Store1:", store.getState());
    // setTimeout(() => console.log("Store2:", store.getState()), 3000);
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
