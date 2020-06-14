import { BUGS } from "./actions";

//initial state is the only object that doesn't need a "type" property because it is not an ACTION
export const initialState = {
  issueType: BUGS,
  issues: [
    { name: "default bug 1", _id: "1" },
    { name: "default bug 2", _id: "2" },
    { name: "default bug 3", _id: "3" },
  ],
};
