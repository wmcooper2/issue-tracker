export const BUGS = "CHANGE_TO_BUGS";
export const DEFAULT = "INITIALIZED_TO_DEFAULT";
export const FEATURES = "CHANGE_TO_FEATURES";
export const UPDATE_ISSUES = "UPDATE_ISSUES";

//action creators
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

export const updateIssues = (issues) => {
  console.log("Action Creator, updateIssues:", issues);
  return {
    type: UPDATE_ISSUES,
    issues: issues,
  };
};
