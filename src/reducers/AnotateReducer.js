import { ACTION } from "../App";
const anotateData = [
  {
    id: 1,
    text: "But it works in my machine...",
    value: 0,
  },
  {
    id: 2,
    text: "If it hurts, do it more often",
    value: 0,
  },
  {
    id: 3,
    text: " Any fool can write code that a computer can understand. Good programmers Write code that humans can understand.",
    value: 0,
  },
  {
    id: 4,
    text: "the first 90 percent of th code accounts for the first 90 percent of the    development time... The remaining 10 precent of the code acc time.",
    value: 0,
  },
  {
    id: 5,
    text: "Adding manpower to a late software project makes it later!",
    value: 0,
  },
];
const anotateReducer = (state = anotateData, action) => {
  switch (action.type) {
    case ACTION.ADD:
      state = state.concat(action.payload);
      state.sort((a, b) => b.value - a.value);
      return state;
    case ACTION.VOTE:
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, value: action.payload.value + 1 };
        } else {
          return item;
        }
      });
      state.sort((a, b) => b.value - a.value);
      return state;
    case ACTION.DEL:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
export default anotateReducer;
