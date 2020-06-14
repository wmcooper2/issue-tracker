import { BUGS, FEATURES, UPDATE_ISSUES } from "./actions";

//a reducer can return any type, here they return a string and an array.
export const issueType = (state = "", action) => {
  switch (action.type) {
    case BUGS:
      return { issueType: BUGS };
      break;
    case FEATURES:
      return { issueType: FEATURES };
      break;
    default:
      return "";
  }
};

export const issues = (state = [], action) => {
  switch (action.type) {
    case UPDATE_ISSUES:
      return [...action.issues];
      break;
    default:
      //   return [{ name: "default issue reducer bug", _id: "oiuo55" }];
      return [];
  }
};
