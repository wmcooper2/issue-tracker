export const BUGS = "CHANGE_TO_BUGS";
export const FEATURES = "CHANGE_TO_FEATURES";
export const UPDATE_ISSUES = "UPDATE_ISSUES";

//ACTION CREATOR, returns an ACTION (JavaScript object)
export const changeToBugs = () => {
  //this is the ACTION, JavaScript object
  return {
    type: BUGS,
  };
};

//ACTION CREATOR, returns an ACTION (JavaScript object)
export const changeToFeatures = () => {
  //this is the ACTION, JavaScript object
  return {
    type: FEATURES,
  };
};

//ACTION CREATOR, returns an ACTION (JavaScript object)
export const updateIssues = (payload) => {
  //this ACTION has a payload of "issues" which is an array of {name: "string", _id: "string"}
  return {
    type: UPDATE_ISSUES,
    issues: payload,
  };
};
