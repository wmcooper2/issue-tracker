import { BUGS, DEFAULT, FEATURES, UPDATE_ISSUES } from "./actions";
// import { BUGS_URL, FEATURES_URL } from "../utilities/constants";
// import { updateIssues } from "./actions";

// const initialState = "empty";
const initialState = {
  type: DEFAULT,
  issueType: "none",
  issues: [
    { name: "default1", _id: "1" },
    { name: "default2", _id: "2" },
    { name: "default3", _id: "3" },
  ],
};

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUGS:
      return {
        ...state,
        issueType: BUGS,
      };
      break;

    case FEATURES:
      return {
        ...state,
        issueType: FEATURES,
      };
      break;

    case UPDATE_ISSUES:
      return {
        ...state,
        issueType: UPDATE_ISSUES,
        issues: state,
      };

    default:
      return state;
  }
};
