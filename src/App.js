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

const anotateReducer = (state = [], action) => {
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
/*
function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}
*/
const App = () => {
  /*
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
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
  }
  function newTodo(name) {
    return {
      name: name,
      id: Date.now(),
      complete: false,
    };
  }
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
*/
  // const name = useRef("");
  // function handleSubmit(e) {
  //   let todo = newTodo(name.current.value);
  //   e.preventDefault();
  //   store.todo.dispatch({
  //     type: ACTIONS.ADD,
  //     payload: todo,
  //   });
  //   name.current.value = "";
  //   name.current.focus();
  // }
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
