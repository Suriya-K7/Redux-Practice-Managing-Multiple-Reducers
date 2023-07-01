import React from "react";
import { useDispatch } from "react-redux";
import StatusBar from "./StatusBar";

const Status = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <button
          className="btn btn-outline-success"
          onClick={() => dispatch({ type: "good" })}
        >
          Good
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch({ type: "ok" })}
        >
          Ok
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch({ type: "bad" })}
        >
          Bad
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset Stat
        </button>
      </div>
      <br />
      <StatusBar />
    </div>
  );
};

export default Status;
