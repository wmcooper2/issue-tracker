import {
  ADD_NEW_ISSUE,
  issue,
  CHOOSE_PROJECT,
  CLEAR_ISSUE,
  SELECT_ISSUE,
  SHOW_ISSUE_DESCRIPTION,
  TOGGLE_PRIORITY_A,
  TOGGLE_PRIORITY_B,
  TOGGLE_PRIORITY_C,
  TOGGLE_FEATURES,
  TOGGLE_BUGS,
  UPDATE_ISSUES,
} from "../utilities/constants";

const ISSUE = "ISSUE";

export const addNewIssue = (payload) => {
  return {
    type: ADD_NEW_ISSUE,
    issueType: payload,
  };
};

export const toggleBugs = () => {
  return {
    type: TOGGLE_BUGS,
  };
};

export const clearIssue = (payload) => {
  return {
    type: CLEAR_ISSUE,
    issueType: "NONE",
    issue: "NONE",
  };
};

export const toggleFeatures = () => {
  return {
    type: TOGGLE_FEATURES,
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



//remove these later, move priority button state local to function
export const togglePriorityA = () => {
  return {
    type: TOGGLE_PRIORITY_A,
  }
}

export const togglePriorityB = () => {
  return {
    type: TOGGLE_PRIORITY_B,
  }
}

export const togglePriorityC = () => {
  return {
    type: TOGGLE_PRIORITY_C,
  }
}

export const chooseProject = (payload) => {
  return {
    type: CHOOSE_PROJECT,
    project: payload,
  }
}
