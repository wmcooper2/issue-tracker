import React from "react";
import AddIssue from "./components/addIssue";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import IssueBtnLinks from "./components/issueBtnLinks";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { changeToBugs, updateIssues } from "./redux/actions";
import {
  issuesReducer,
  issueType,
  selectIssueReducer,
  priorityReducer,
} from "./redux/reducers";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    issues: issuesReducer,
    issueType: issueType,
    issue: selectIssueReducer,
    priority: priorityReducer,
  }),
  initialState
  /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  componentDidMount() {
    //on first initialization, loads bugs, what about later redirects back here?
    fetch("https://wmcooper2.com/issue-tracker-api/bugs")
      .then((response) => response.json())
      .then((result) => {
        store.dispatch(changeToBugs());
        store.dispatch(updateIssues(result));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <Box>
          <AppHeader></AppHeader>
          {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
          <HashRouter>
            <Box
              component="div"
              className={{ display: "flex", flexDirection: "column" }}
            >
              <IssueBtnLinks></IssueBtnLinks>
              <Switch>
                <Route path="/add-issue">
                  <AddIssue></AddIssue>
                </Route>
                <Route path="/">
                  <Dashboard></Dashboard>
                </Route>
              </Switch>
            </Box>
          </HashRouter>
        </Box>
      </Provider>
    );
  }
}

export default App;
