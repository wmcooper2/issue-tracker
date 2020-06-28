import {
  ADD_NEW_ISSUE,
  BUG,
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ISSUE:
      return { ...state, issueType: action.issueType };
      break;
    case BUG:
      return { ...state, issueType: BUG };
      break;
    case CLEAR_ISSUE:
      return { ...state, issue: action.issue };
      break;
    case FEATURE:
      return { ...state, issueType: FEATURE };
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

