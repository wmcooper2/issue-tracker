import {
    ADD_NEW_ISSUE,
    BUG,
    CHOOSE_PROJECT,
    CLEAR_ISSUE,
    FEATURE,
    ISSUE,
    SELECT_ISSUE,
    TOGGLE_PRIORITY_A,
    TOGGLE_PRIORITY_B,
    TOGGLE_PRIORITY_C,
    UPDATE_ISSUES,
} from "../utilities/constants";
import initialState from "./initialState";


//remove priority toggles after fixing local state in function
export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_NEW_ISSUE:
        return { ...state, issueType: action.issueType };
        // eslint-disable-next-line
      break;
    case BUG:
        return { ...state, issueType: BUG };
        // eslint-disable-next-line
      break;
    case CHOOSE_PROJECT:
        return { ...state, project: action.project };
        // eslint-disable-next-line
      break;
    case CLEAR_ISSUE:
        return { ...state, issue: action.issue };
        // eslint-disable-next-line
      break;
    case FEATURE:
        return { ...state, issueType: FEATURE };
        // eslint-disable-next-line
      break;
    case ISSUE:
        return { ...state, issueType: ISSUE };
        // eslint-disable-next-line
      break;
    case SELECT_ISSUE:
        return { ...state, issue: action.issue };
        // eslint-disable-next-line
      break;
    case UPDATE_ISSUES:
        return { ...state, issues: action.issues };
        // eslint-disable-next-line
      break;
    case TOGGLE_PRIORITY_A:
        return { ...state, priorityASelected: !state.priorityASelected };
        // eslint-disable-next-line
      break;
    case TOGGLE_PRIORITY_B:
        return { ...state, priorityBSelected: !state.priorityBSelected };
        // eslint-disable-next-line
      break;
    case TOGGLE_PRIORITY_C:
        return { ...state, priorityCSelected: !state.priorityCSelected };
        // eslint-disable-next-line
      break;
    default:
        return { ...state };

    }
};

