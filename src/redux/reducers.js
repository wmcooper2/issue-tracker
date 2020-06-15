import {
  BUGS,
  FEATURES,
  SELECT_ISSUE,
  UPDATE_ISSUES,
} from "../utilities/constants";

import initialState from "./initialState";

//a reducer can return any type, here they return a string and an array.
//these arent needed, maybe
export const issueType = (state = initialState, action) => {
  switch (action.type) {
    case BUGS:
      return { ...state, issueType: BUGS };
      break;
    case FEATURES:
      return { ...state, issueType: FEATURES };
      break;
    default:
      return { ...state };
  }
};

export const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ISSUES:
      return {
        ...state,
        issues: action.issues,
      };
      break;
    default:
      return { ...state };
  }
};

export const selectIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ISSUE:
      return { ...state, issue: action.issue };
      break;
    default:
      return { ...state };
  }
};

export const priorityReducer = (state = initialState, action) => {
  return { ...state };
};
