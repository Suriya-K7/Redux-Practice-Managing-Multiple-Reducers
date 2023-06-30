const allStatus = {
  good: 0,
  bad: 0,
  ok: 0,
};
const statusReducer = (state = allStatus, action) => {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + 1 };
    case "ok":
      return { ...state, ok: state.ok + 1 };
    case "bad":
      return { ...state, bad: state.bad + 1 };
    default:
      return {
        good: 0,
        bad: 0,
        ok: 0,
      };
  }
};

export default statusReducer;
