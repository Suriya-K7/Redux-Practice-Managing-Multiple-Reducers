import React, { useRef } from "react";
import { createStore } from "redux";
// import Todos from "./Todos.js";
import { Provider } from "react-redux";
// import Status from "./Status.js";
// import statusReducer from "./reducers/Status.js";
import Anotates from "./components/Anotates.js";
// import anotateReducer from "./reducers/AnotateReduce.js";

export const ACTIONS = {
  ADD: "add",
  COM: "complete",
  DEL: "delete",
};
/*
const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, action.payload];
    case ACTIONS.COM:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTIONS.DEL:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};*/
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
    case "add":
      state = state.concat(action.payload);
      state.sort((a, b) => b.value - a.value);
      console.log(state);
      return state;
    case "vote":
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, value: action.payload.value + 1 };
        } else {
          return item;
        }
      });
      state.sort((a, b) => b.value - a.value);
      return state;
    default:
      return state;
  }
};
const store = createStore(anotateReducer);
const App = () => {
  const text = useRef("");
  const newTextData = (text) => {
    return {
      id: Date.now(),
      text: text,
      value: 0,
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let textData = newTextData(text.current.value);
    store.dispatch({
      type: "add",
      payload: textData,
    });
    text.current.value = "";
  };

  return (
    <Provider store={store}>
      <div className="container">
        <form onSubmit={handleSubmit} className="p-3 d-flex gap-2">
          <input ref={text} type="text" className="form-control" />
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
        <Anotates />
      </div>
    </Provider>
  );
};

export default App;
