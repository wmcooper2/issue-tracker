import {
  BUGS,
  FEATURES,
  SELECT_ISSUE,
  UPDATE_ISSUES,
} from "../utilities/constants";

import initialState from "./initialState";

//a reducer can return any type, here they return a string and an array.
//these arent needed, maybe
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUGS:
      return { ...state, issueType: BUGS };
      break;
    case FEATURES:
      return { ...state, issueType: FEATURES };
      break;
    case UPDATE_ISSUES:
      return { ...state, issues: action.issues };
    case SELECT_ISSUE:
      return { ...state, issue: action.issue };
      break;
    default:
      return { ...state };
  }
};