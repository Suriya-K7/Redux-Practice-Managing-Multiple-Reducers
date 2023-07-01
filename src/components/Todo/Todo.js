import React from "react";
import { ACTION } from "../../App.js";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex container align-items-center justify-content-between ">
      <span
        className={`d-block w-25 ${
          todo.complete ? "text-decoration-line-through" : ""
        }`}
        style={{ color: todo.complete ? "#AAA" : "#000" }}
      >
        {todo.name}
      </span>
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch({ type: ACTION.COM, payload: { id: todo.id } })}
        disabled={todo.complete ? true : false}
      >
        {todo.complete ? "Done" : "Pending"}
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: ACTION.DEL, payload: { id: todo.id } })}
      >
        delete
      </button>
    </div>
  );
};

export default Todo;
