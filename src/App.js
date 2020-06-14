import React from "react";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import fetch from "isomorphic-fetch";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { issueReducer } from "./redux/reducers";
import { Provider } from "react-redux";
import { changeToBugs, changeToFeatures, updateIssues } from "./redux/actions";

const store = createStore(issueReducer);
class App extends React.Component {
  componentDidMount() {
    console.log("App, DidMount, before fetch, store:", store.getState());
    fetch("https://wmcooper2.com/bug-tracker-api/bugs")
      .then((response) => response.json())
      .then((result) => {
        console.log("Action updateIssues, fetch:", result);
        // pass results to updateIssues action creator?
        // dispatch updateIssues to store?
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
