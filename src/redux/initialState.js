import { BUGS, PRIORITY_A } from "../utilities/constants";

//initial state is the only object that doesn't need a "type" property because it is not an ACTION
export const initialState = {
  issueType: BUGS,
  issues: [
    { name: "initialState bug 1", _id: "1" },
    { name: "initialState bug 2", _id: "2" },
    { name: "initialState bug 3", _id: "3" },
  ],
  issue: { name: "initialState issue", _id: "1" },
  priority: PRIORITY_A,
};

export default initialState;
