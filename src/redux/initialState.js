import { BUGS, DEFAULT_ISSUE } from "../utilities/constants";

//initial state is the only object that doesn't need a "type" property because it is not an ACTION
export const initialState = {
  issueType: BUGS,
  issues: [DEFAULT_ISSUE, DEFAULT_ISSUE, DEFAULT_ISSUE],
  issue: DEFAULT_ISSUE,
};

export default initialState;
