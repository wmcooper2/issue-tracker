import { BUG_LIST, FEATURE_LIST } from "./actions";
// import { BUGS_URL, FEATURES_URL } from "../utilities/constants";

const initialState = "empty";

export const issueReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case BUG_LIST:
      return { issues: "massive bugs" };
      break;

    case FEATURE_LIST:
      return { issues: "super cool features" };
      break;

    default:
      return previousState;
  }
};
