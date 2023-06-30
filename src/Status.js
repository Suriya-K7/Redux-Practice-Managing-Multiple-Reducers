import React from "react";
import { useDispatch } from "react-redux";
import StatusBar from "./StatusBar";

const Status = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <button onClick={() => dispatch({ type: "good" })}>Good</button>
        <button onClick={() => dispatch({ type: "ok" })}>Ok</button>
        <button onClick={() => dispatch({ type: "bad" })}>Bad</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Stat</button>
      </div>
      <br />
      <StatusBar />
    </div>
  );
};

export default Status;
