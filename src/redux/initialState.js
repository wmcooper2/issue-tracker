import { DEFAULT_ISSUE1, DEFAULT_ISSUE2, DEFAULT_ISSUE3, ISSUE } from "../utilities/constants";

export const initialState = {
    issueType: ISSUE,
    issues: [DEFAULT_ISSUE1, DEFAULT_ISSUE2, DEFAULT_ISSUE3],
    issue: DEFAULT_ISSUE1,
    priorityASelected: true,
    priorityBSelected: true,
    priorityCSelected: true,
    project: "Issue Tracker"
};

export default initialState;
