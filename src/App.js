import React from "react";
import AddButton from "./components/addButton";
import AddIssue from "./components/addIssue";
import EditIssue from "./components/editIssue";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";

import BugButton from "./components/bugButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FeatureButton from "./components/featureButton";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { updateIssues } from "./redux/actions";
import { reducer } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import PriorityBtns from "./components/priorityBtns";
import { BASE_URL, ISSUES_URL, EDIT_ISSUE_ENDPOINT, ADD_ISSUE_ENDPOINT } from "./utilities/constants";

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//GOOGLE CHROME, above line

class App extends React.Component {
  componentDidMount() {
    fetch(ISSUES_URL)
      .then((response) => response.json())
      .then((result) => {
        store.dispatch(updateIssues(result));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  shouldComponentUpdate() {
    fetch(ISSUES_URL)
      .then((response) => response.json())
      .then((result) => {
        store.dispatch(updateIssues(result));
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <Provider store={store} >
        < HashRouter >
          <Box>
            <AppHeader></AppHeader>
            <Box
              component="div"
              className={{ display: "flex", flexDirection: "column" }}
            >
              <Switch>
                <Route path={ADD_ISSUE_ENDPOINT}>
                  <AddIssue></AddIssue>
                </Route>
                <Route path={EDIT_ISSUE_ENDPOINT}>
                  <EditIssue></EditIssue>
                </Route>
                <Route path="/">
                  <ButtonGroup>
                    <BugButton></BugButton>
                    <FeatureButton></FeatureButton>
                  </ButtonGroup>
                  <ButtonGroup>
                    <PriorityBtns></PriorityBtns>
                  </ButtonGroup>
                  <AddButton></AddButton>

                  <Dashboard></Dashboard>
                </Route>
              </Switch>
            </Box>
          </Box>
        </HashRouter>
      </Provider >
    );
  }
}

export default App;
