import { BUG, DEFAULT_ISSUE, ISSUE } from "../utilities/constants";

//initial state is the only object that doesn't need a "type" property because it is not an ACTION
export const initialState = {
  issueType: ISSUE,
  issues: [DEFAULT_ISSUE, DEFAULT_ISSUE, DEFAULT_ISSUE],
  issue: DEFAULT_ISSUE,
};

export default initialState;
