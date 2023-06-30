import React from "react";
import { useSelector } from "react-redux";

const StatusBar = () => {
  const state = useSelector((state) => state);
  return (
    <div className="container">
      <div className="row">Good {state.good}</div>
      <div className="row">Ok {state.ok}</div>
      <div className="row">Bad {state.bad}</div>
    </div>
  );
};

export default StatusBar;
