import {
  ADD_NEW_ISSUE,
  BUGS,
  FEATURES,
  SELECT_ISSUE,
  UPDATE_ISSUES,
} from "../utilities/constants";

export const changeToBugs = () => {
  return {
    type: BUGS,
  };
};

export const changeToFeatures = () => {
  return {
    type: FEATURES,
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
