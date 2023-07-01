import React, { useRef } from "react";
import { createStore } from "redux";
import Todos from "./components/Todo/Todos";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import Status from "./components/Status/Status.js";
import statusReducer from "./reducers/Status.js";
import Anotates from "./components/Annotate/Anotates.js";
import anotateReducer from "./reducers/AnotateReducer.js";
import todoReducer from "./reducers/TodoRedeucer.js";

export const ACTION = {
  ADD: "add",
  ADDTODO: "addtodo",
  COM: "complete",
  DEL: "del",
  VOTE: "vote",
};
const rootReducer = combineReducers({
  anotate: anotateReducer,
  status: statusReducer,
  todo: todoReducer,
});

// const store = createStore(anotateReducer);
const store = createStore(rootReducer);

const App = () => {
  const text = useRef("");
  const newTextData = (text) => {
    return {
      id: Date.now(),
      text: text,
      value: 0,
    };
  };
  const handleSubmitAnnotate = (e) => {
    e.preventDefault();
    let textData = newTextData(text.current.value);
    store.dispatch({
      type: "add",
      payload: textData,
    });
    text.current.value = "";
  };
  function newTodo(name) {
    return {
      id: Date.now(),
      name: name,
      complete: false,
    };
  }
  const name = useRef("");
  function handleSubmitTodo(e) {
    let todo = newTodo(name.current.value);
    e.preventDefault();
    store.dispatch({
      type: ACTION.ADDTODO,
      payload: todo,
    });
    name.current.value = "";
    name.current.focus();
  }
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center">TASK 01 - Status</h1>
        <Status />
      </div>
      <hr />
      <div className="container">
        <h1 className="text-center">TASK 02 - Annodate</h1>
        <form onSubmit={handleSubmitAnnotate} className="p-3 d-flex gap-2">
          <input ref={text} type="text" className="form-control" />
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
        <Anotates />
      </div>
      <hr />
      <div className="container my-3">
        <h1 className="text-center">Task 03 - TODO</h1>
        <form onSubmit={handleSubmitTodo} className="p-3 d-flex gap-2">
          <input ref={name} type="text" className="form-control" />
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </form>
        <Todos />
      </div>
    </Provider>
  );
};

export default App;
