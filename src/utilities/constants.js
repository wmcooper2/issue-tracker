export const ADD_ISSUE_ENDPOINT = "/add-issue";
export const BUGS_ENDPOINT = "/bugs";
export const EDIT_ISSUE_ENDPOINT = "/edit-issue";
export const FEATURES_ENDPOINT = "/features";

export const BASE_URL = "https://wmcooper2.com/";
export const APP_URL = "https://wmcooper2.com/issue-tracker";

// export const ADD_ISSUE_URL = "https://wmcooper2.com/issue-tracker/add-issue";
// export const BUGS_URL = "https://wmcooper2.com/issue-tracker/bugs";
// export const DELETE_URL = "https://wmcooper2.com/issue-tracker/delete-issue";
// export const EDIT_ISSUE_URL = "https://wmcooper2.com/issue-tracker/edit-issue";
// export const FEATURES_URL = "https://wmcooper2.com/issue-tracker/features";
// export const ISSUES_URL = "https://wmcooper2.com/issue-tracker/issues";

export const ADD_ISSUE_URL = "/issue-tracker/add-issue";
export const BUGS_URL = "/issue-tracker/bugs";
export const DELETE_URL = "/issue-tracker/delete-issue";
export const EDIT_ISSUE_URL = "/issue-tracker/edit-issue";
export const FEATURES_URL = "/issue-tracker/features";
export const ISSUES_URL = "/issue-tracker/issues";



export const BUG = "BUG";
export const FEATURE = "FEATURE";
export const ISSUE = "ISSUE";

export const ADD_NEW_ISSUE = "ADD_NEW_ISSUE";
export const CLEAR_ISSUE = "CLEAR_ISSUE";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const SHOW_ISSUE_DESCRIPTION = "SHOW_ISSUE_DESCRIPTION";
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

export const DEFAULT_ISSUE = {
  _id: "1",
  name: "Think of a good name",
  issueType: "Issue type",
  version: 1,
  category: "Some category",
  priority: PRIORITY_A,
  dates: {
    opened: Date.now(),
    closed: Date.now(),
    lastEdited: Date.now(),
  },
  people: {
    opened: "ALICE",
    closed: "BOB",
    lastEdited: "CAROL",
  },
  hoursSpent: 0,
  description: "Click on an issue above to see the description.",
  messages: [
    {
      person: "ALICE",
      message: "Default message from Alice.",
      date: Date.now(),
    },
    {
      person: "BOB",
      message: "Default message from Bob.",
      date: Date.now(),
    },
    {
      person: "CAROL",
      message: "Default message from Carol.",
      date: Date.now(),
    },
  ],
  similarIssues: ["1111111", "2222222", "3333333"],
  keywords: ["keyword1", "keyword2", "keyword3"],
};
