export const PROJECTS = [
    "IssueTracker",
    "DirectionsGame",
    "FreelanceSite",
];

export const DEFAULT_PROJECT = "IssueTracker";

//endpoints within this app
export const ADD_ISSUE_ENDPOINT = "/add-issue";
export const BUGS_ENDPOINT = "/bugs";
export const LOGIN_ENDPOINT = "/login";
export const EDIT_ISSUE_ENDPOINT = "/edit-issue";
export const FEATURES_ENDPOINT = "/features";

export const BASE_URL = "https://wmcooper2.com/";
export const APP_URL = "https://wmcooper2.com/issue-tracker";

//endpoints on the server
export const ADD_ISSUE_URL = "/issue-tracker/add-issue";
export const BUGS_URL = "/issue-tracker/bugs";
export const CLOSE_ISSUE_URL = "/issue-tracker/close-issue";
export const DELETE_URL = "/issue-tracker/delete-issue";
export const EDIT_ISSUE_URL = "/issue-tracker/edit-issue";
export const FEATURES_URL = "/issue-tracker/features";
export const ISSUES_URL = "/issue-tracker/issues";
export const LOGIN_URL = "/issue-tracker/login";


//issueTypes
export const BUG = "BUG";
export const FEATURE = "FEATURE";
export const ISSUE = "ISSUE";

//Action types
export const ADD_NEW_ISSUE = "ADD_NEW_ISSUE";
export const CLEAR_ISSUE = "CLEAR_ISSUE";
export const CHOOSE_PROJECT = "CHOOSE_PROJECT";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const SHOW_ISSUE_DESCRIPTION = "SHOW_ISSUE_DESCRIPTION";
export const TOGGLE_PRIORITY_A = "TOGGLE_PRIORITY_A";
export const TOGGLE_PRIORITY_B = "TOGGLE_PRIORITY_B";
export const TOGGLE_PRIORITY_C = "TOGGLE_PRIORITY_C";
export const UPDATE_ISSUES = "UPDATE_ISSUES";

export const PRIORITY_A = "A";
export const PRIORITY_B = "B";
export const PRIORITY_C = "C";

//Stylings
export const PRIORITY_A_GRADIENT =
    "linear-gradient(300deg, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0.9) 100%)";
export const PRIORITY_B_GRADIENT =
    "linear-gradient(300deg, rgba(255,255,0,0.6) 0%, rgba(255,255,0,0.9) 100%)";
export const PRIORITY_C_GRADIENT =
    "linear-gradient(300deg, rgba(0,128,0,0.6) 0%, rgba(0,128,0,0.9) 100%)";
export const BUG_GRADIENT =
    "linear-gradient(300deg, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.9) 100%)";
export const FEATURE_GRADIENT =
    "linear-gradient(300deg, rgba(128,0,128,0.6) 0%, rgba(128,0,128,0.9) 100%)";

export const BUG_BLUE_3 = "rgba(0,0,255, 0.3)";
export const FEATURE_PURPLE_3 = "rgba(128,0,128, 0.3)";
export const PRIORITY_A_RED_3 = "rgba(255,0,0,0.3)";
export const PRIORITY_B_YELLOW_3 = "rgba(255,255,0,0.3)";
export const PRIORITY_C_GREEN_3 = "rgba(0,128,0,0.3)";

export const DEFAULT_ISSUE1 = {
    _id: "1",
    name: "Default issue 1",
    issueType: BUG,
    version: 1,
    category: "Some category",
    priority: PRIORITY_A,
    dates: {
        opened: new Date(),
        closed: new Date(),
        lastEdited: new Date(),
    },
    people: {
        opened: "BOB",
        closed: "BOB",
        lastEdited: "BOB",
    },
    hoursSpent: 0,
    description: "Click on an issue above to see the description.",
    messages: [
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
    ],
    similarIssues: ["444444", "555555", "666666"],
    keywords: ["keyword4", "keyword5", "keyword6"],
};

export const DEFAULT_ISSUE2 = {
    _id: "2",
    name: "Default issue 2",
    issueType: BUG,
    version: 1,
    category: "Some category",
    priority: PRIORITY_B,
    dates: {
        opened: new Date(),
        closed: new Date(),
        lastEdited: new Date(),
    },
    people: {
        opened: "ALICE",
        closed: "ALICE",
        lastEdited: "ALICE",
    },
    hoursSpent: 0,
    description: "Click on an issue above to see the description.",
    messages: [
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
    ],
    similarIssues: ["1111111", "2222222", "3333333"],
    keywords: ["keyword1", "keyword2", "keyword3"],
};

export const DEFAULT_ISSUE3 = {
    _id: "3",
    name: "Default issue 3",
    issueType: FEATURE,
    version: 1,
    category: "Some category",
    priority: PRIORITY_C,
    dates: {
        opened: new Date(),
        closed: new Date(),
        lastEdited: new Date(),
    },
    people: {
        opened: "CAROL",
        closed: "CAROL",
        lastEdited: "CAROL",
    },
    hoursSpent: 0,
    description: "Click on an issue above to see the description.",
    messages: [
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
        {
            person: null,
            message: null,
            date: null,
        },
    ],
    similarIssues: ["777777", "888888", "999999"],
    keywords: ["keyword7", "keyword8", "keyword9"],
};