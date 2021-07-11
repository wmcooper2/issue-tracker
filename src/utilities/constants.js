
//endpoints within this app
export const ADD_ISSUE_ENDPOINT = "/add-issue";
export const EDIT_ISSUE_ENDPOINT = "/edit-issue";

//endpoints on the server
export const ISSUES_URL = "/issue-tracker/issues";

//issueTypes
export const issue = {
    bug: "BUG",
    feature: "FEATURE",
}

//Action types
export const ADD_NEW_ISSUE = "ADD_NEW_ISSUE";
export const CLEAR_ISSUE = "CLEAR_ISSUE";
export const CHOOSE_PROJECT = "CHOOSE_PROJECT";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const SHOW_ISSUE_DESCRIPTION = "SHOW_ISSUE_DESCRIPTION";
export const TOGGLE_PRIORITY_A = "TOGGLE_PRIORITY_A";
export const TOGGLE_PRIORITY_B = "TOGGLE_PRIORITY_B";
export const TOGGLE_PRIORITY_C = "TOGGLE_PRIORITY_C";
export const TOGGLE_FEATURES = "TOGGLE_FEATURES";
export const TOGGLE_BUGS = "TOGGLE_BUGS";
export const UPDATE_ISSUES = "UPDATE_ISSUES";

export const PRIORITY_A = "A";
export const PRIORITY_B = "B";
export const PRIORITY_C = "C";
