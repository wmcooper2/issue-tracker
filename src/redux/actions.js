import {
  ADD_NEW_ISSUE,
  BUG,
  CLEAR_ISSUE,
  FEATURE,
  SELECT_ISSUE,
  UPDATE_ISSUES,
} from "../utilities/constants";

export const changeToBugs = () => {
  return {
    type: BUG,
  };
};

export const changeToFeatures = () => {
  return {
    type: FEATURE,
  };
};

export const updateIssues = (payload) => {
  return {
    type: UPDATE_ISSUES,
    issues: payload,
  };
};

export const selectIssue = (payload) => {
  return {
    type: SELECT_ISSUE,
    issue: payload,
  };
};

export const addNewIssue = (payload) => {
  return {
    type: ADD_NEW_ISSUE,
    issueType: payload,
  };
};

export const clearIssue = (payload) => {
  return {
    type: CLEAR_ISSUE,
    issueType: "NONE",
    issue: "NONE",
  };
};
