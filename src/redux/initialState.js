import { issue, PRIORITY_A, PRIORITY_B, PRIORITY_C} from "../utilities/constants";

const DEFAULT_PROJECT = "Progress Tracker";

const DEFAULT_ISSUE1 = {
    _id: "1",
    name: "Default bug 1",
    issueType: issue.bug,
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
    description: "Click on an issue above to see its details.",
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

const DEFAULT_ISSUE2 = {
    _id: "2",
    name: "Default bug 2",
    issueType: issue.bug,
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

const DEFAULT_ISSUE3 = {
    _id: "3",
    name: "Default feature 3",
    issueType: issue.feature,
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

export const initialState = {
    issueType: "ISSUES",
    issueSelection: [issue.bug, issue.feature],
    issues: [DEFAULT_ISSUE1, DEFAULT_ISSUE2, DEFAULT_ISSUE3],
    issue: DEFAULT_ISSUE1,
    priorityASelected: true,
    priorityBSelected: true,
    priorityCSelected: true,
    project: DEFAULT_PROJECT,
};