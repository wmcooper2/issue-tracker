import React from "react";

import AddButton from "./components/addButton";
import AddIssue from "./components/addIssue";
import AppHeader from "./components/appHeader";
import Box from "@material-ui/core/Box";
import BugButton from "./components/bugButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dashboard from "./components/dashboard";
import EditIssue from "./components/editIssue";
import FeatureButton from "./components/featureButton";
import FullDetails from "./components/fullDetails";
import fetch from "isomorphic-fetch";
import Login from "./components/login";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { updateIssues } from "./redux/actions";
import { reducer } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import PriorityBtns from "./components/priorityBtns";
import { ADD_ISSUE_ENDPOINT, EDIT_ISSUE_ENDPOINT, FULL_DETAILS, ISSUES_URL, LOGIN_ENDPOINT } from "./utilities/constants";

const store = createStore(
    reducer,
    initialState,

    //GOOGLE CHROME, DEVTOOL
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
    componentDidMount() {
        this.loadIssues();
    }

    shouldComponentUpdate() {
        this.loadIssues();
    }

    async loadIssues() {
        const project = store.getState().project;
        console.log("App, loadIssues, project:", project);
        await fetch(`${ISSUES_URL}/${project}`)
            .then((response) => response.json())
            .then((result) => {
                store.dispatch(updateIssues(result));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Provider store={store} >
                <HashRouter>
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

                                <Route path={FULL_DETAILS}>
                                    <FullDetails></FullDetails>
                                </Route>

                                <Route path={LOGIN_ENDPOINT}>
                                    <Login></Login>
                                </Route>

                                <Route path="*">
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
