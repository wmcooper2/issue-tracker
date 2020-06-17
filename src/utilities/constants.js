export const BUGS_URL = "https://wmcooper2.com/issue-tracker-api/bugs";
export const DELETE_URL =
  "https://wmcooper2.com/issue-tracker-api/delete-issue";
export const FEATURES_URL = "https://wmcooper2.com/issue-tracker-api/features";

export const BUGS = "BUG";
export const FEATURES = "FEATURE";

export const ADD_NEW_ISSUE = "ADD_NEW_ISSUE";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const UPDATE_ISSUES = "UPDATE_ISSUES";

export const PRIORITY_A = "A";
export const PRIORITY_B = "B";
export const PRIORITY_C = "C";

export const DEFAULT_ISSUE = {
  _id: "1",
  name: "default issue",
  issueType: "default type",
  version: 1,
  category: "default category",
  priority: "A",
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
  description: "Default description",
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
