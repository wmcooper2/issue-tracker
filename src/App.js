import React from "react";
// import "./App.css";
import AddBug from "./components/addBug";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugFeatureBtnLinks from "./components/bugFeatureBtnLinks";
import Dashboard from "./components/dashboard";
import { HashRouter, Switch, Route } from "react-router-dom";
import fetch from "isomorphic-fetch";
import { createStore } from "redux";
import { issueReducer } from "./redux/reducers";
import { bugList, featureList } from "./redux/actions";
import { Provider } from "react-redux";

//redux
const store = createStore(issueReducer);
console.log("initial store:", store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(bugList());
store.dispatch(featureList());
console.log("final store:", store.getState());
unsubscribe();

class App extends React.Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // bugs: null,
  // };
  // }

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
                {/* <Dashboard {...this.state}></Dashboard> */}
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
