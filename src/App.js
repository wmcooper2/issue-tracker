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
// import Login from "./components/login";

import { HashRouter, Switch, Route } from "react-router-dom";
import { initialState } from "./redux/initialState";
import { updateIssues } from "./redux/actions";
import { reducer } from "./redux/reducers";
// import { connect } from "react-redux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import PriorityBtns from "./components/priorityButtons";
import { ADD_ISSUE_ENDPOINT, EDIT_ISSUE_ENDPOINT, ISSUES_URL } from "./utilities/constants";

const store = createStore(
    reducer,
    initialState,

    //GOOGLE CHROME, DEVTOOL
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const customStyles = makeStyles({
    header:{
        display: "flex",
        flexDirection: "column" ,
    }
})

class App extends React.Component {
    componentDidMount() {
        this.loadIssues();
    }

    shouldComponentUpdate() {
        this.loadIssues();
    }

    async loadIssues() {
        const project = store.getState().project;
        await fetch(`${ISSUES_URL}/${project}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                store.dispatch(updateIssues(result));
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <Provider store={store} >
                <HashRouter>
                    <Box>
                        <AppHeader store={store}></AppHeader>
                        <Box
                            component="div"
                            className={customStyles.header}>
                            <Switch>
                                <Route path={ADD_ISSUE_ENDPOINT}>
                                    <AddIssue></AddIssue>
                                </Route>

                                <Route path={EDIT_ISSUE_ENDPOINT}>
                                    <EditIssue></EditIssue>
                                </Route>

                                <Route path={"/full-details"}>
                                    <FullDetails></FullDetails>
                                </Route>

                                {/* <Route path={"/login"}> */}
                                    {/* <Login></Login> */}
                                {/* </Route> */}

{/* move filter buttons inside the table component */}
                                <Route path="*">
                                    {/* Filter-by button group */}
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
            </Provider>
        );
    }
}

export default App;


// const mapStateToProps = () => {};
// const mapDispatchToProps = () => {};

// export default connect(mapStateToProps, mapDispatchToProps)(App);