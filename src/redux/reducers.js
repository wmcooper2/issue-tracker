import {
    ADD_NEW_ISSUE,
    issue,
    CHOOSE_PROJECT,
    CLEAR_ISSUE,
    SELECT_ISSUE,
    TOGGLE_PRIORITY_A,
    TOGGLE_PRIORITY_B,
    TOGGLE_PRIORITY_C,
    TOGGLE_FEATURES,
    TOGGLE_BUGS,
    UPDATE_ISSUES,
} from "../utilities/constants";
import { initialState } from "./initialState";

const ISSUE = "ISSUE";

//remove priority toggles after fixing local state in function
export const reducer = (state = initialState, action) => {
    let filteredSelections = state.issueSelection;
    switch (action.type) {
    case ADD_NEW_ISSUE:
        return { ...state, issueType: action.issueType };
      break;
    case TOGGLE_BUGS:
        if (state.issueSelection.includes(issue.bug)){
          filteredSelections = filteredSelections.filter(i => i != issue.bug)
        } else {
          filteredSelections = filteredSelections.concat([issue.bug]);
        }
        return { ...state, issueType: issue.bug, issueSelection: filteredSelections };
      break;
    case CHOOSE_PROJECT:
        return { ...state, project: action.project };
      break;
    case CLEAR_ISSUE:
        return { ...state, issue: action.issue };
      break;
    case TOGGLE_FEATURES:
        if (state.issueSelection.includes(issue.feature)){
          filteredSelections = filteredSelections.filter(i => i != issue.feature)
        } else {
          filteredSelections = filteredSelections.concat([issue.feature]);
        }
        return { ...state, issueType: issue.feature, issueSelection: filteredSelections};
      break;
    case ISSUE:
        return { ...state, issueType: ISSUE };
      break;
    case SELECT_ISSUE:
        return { ...state, issue: action.issue };
      break;
    case UPDATE_ISSUES:
        return { ...state, issues: action.issues };
      break;
    case TOGGLE_PRIORITY_A:
        return { ...state, priorityASelected: !state.priorityASelected };
      break;
    case TOGGLE_PRIORITY_B:
        return { ...state, priorityBSelected: !state.priorityBSelected };
      break;
    case TOGGLE_PRIORITY_C:
        return { ...state, priorityCSelected: !state.priorityCSelected };
      break;
    default:
        return { ...state };

    }
};

