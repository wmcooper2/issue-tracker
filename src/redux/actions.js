import { dateFormat3 } from "../utilities/utilities";
import {
  ADD_NEW_ISSUE,
  BUG,
  CLEAR_ISSUE,
  FEATURE,
  ISSUE,
  SELECT_ISSUE,
  SHOW_ISSUE_DESCRIPTION,
  UPDATE_ISSUES,
} from "../utilities/constants";


export const addNewIssue = (payload) => {
  return {
    type: ADD_NEW_ISSUE,
    issueType: payload,
  };
};

export const changeToBugs = () => {
  return {
    type: BUG,
  };
};

export const clearIssue = (payload) => {
  return {
    type: CLEAR_ISSUE,
    issueType: "NONE",
    issue: "NONE",
  };
};

export const changeToFeatures = () => {
  return {
    type: FEATURE,
  };
};

export const changeToIssues = () => {
  return {
    type: ISSUE,
  };
};

export const selectIssue = (payload) => {
  return {
    type: SELECT_ISSUE,
    issue: payload,
  };
};

//not used
export const showIssueDescription = (payload) => {
  return {
    type: SHOW_ISSUE_DESCRIPTION,
  };
};

export const updateIssues = (payload) => {
  return {
    type: UPDATE_ISSUES,
    issues: payload,
  };
};

