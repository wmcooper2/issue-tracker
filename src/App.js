import React from "react";
import AddButton from "./components/addButton";
import AddIssue from "./components/addIssue";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
// import IssueBtnLinks from "./components/issueBtnLinks";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";

// import { makeStyles } from "@material-ui/core/styles";
import BugButton from "./components/bugButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FeatureButton from "./components/featureButton";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { changeToBugs, updateIssues } from "./redux/actions";
import { reducer } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import PriorityBtns from "./components/priorityBtns";

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//GOOGLE CHROME, above line

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
    console.log("App, store:", store.getState());
  }

  render() {
    return (
      <Provider store={store}>
          <HashRouter>
        <Box>
          <AppHeader></AppHeader>
          {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
            <Box
              component="div"
              className={{ display: "flex", flexDirection: "column" }}
            >

              <Switch>
                <Route path="/add-issue">
                  <AddIssue></AddIssue>
                </Route>
                <Route path="/">

              <ButtonGroup style={{ minHeight: "10mm", margin: "1rem" }}>
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
      </Provider>
    );
  }
}

export default App;
