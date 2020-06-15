import { BUGS, FEATURES, SELECT_ISSUE, UPDATE_ISSUES} from "../utilities/constants";
    
//ACTION CREATOR, returns an ACTION (JavaScript object)
export const changeToBugs = () => {
  //this is the ACTION, JavaScript object
  return {
    type: BUGS,
  };
};

//ACTION CREATOR
export const changeToFeatures = () => {
  //this is the ACTION, JavaScript object
  return {
    type: FEATURES,
  };
};

//ACTION CREATOR
export const updateIssues = (payload) => {
  //this ACTION has a payload of "issues" which is an array of objects [{name: "string", _id: "string"}]
  return {
    type: UPDATE_ISSUES,
    issues: payload,
  };
};

//ACTION CREATOR
export const selectIssue = (issue) => {
  return {
    type: SELECT_ISSUE,
    issue: issue,
  };
};
