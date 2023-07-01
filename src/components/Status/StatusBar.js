import React from "react";
import { useSelector } from "react-redux";

const StatusBar = () => {
  const state = useSelector((state) => state.status);
  return (
    <div className="container d-flex justify-content-between">
      <div className="row btn btn-success">Good {state.good}</div>
      <div className="row btn btn-primary">Ok {state.ok}</div>
      <div className="row btn btn-danger">Bad {state.bad}</div>
    </div>
  );
};

export default StatusBar;
