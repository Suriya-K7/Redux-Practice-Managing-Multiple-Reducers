import React from "react";
import { useDispatch } from "react-redux";

const AnotateNote = ({ each }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{each.text}</p>
      <p>
        has <span className="mx-2"> {each.value}</span>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() =>
            dispatch({
              type: "vote",
              payload: { id: each.id, value: each.value },
            })
          }
        >
          Vote
        </button>
        <button
          className="btn btn-outline-danger mx-3"
          onClick={() =>
            dispatch({
              type: "del",
              payload: { id: each.id },
            })
          }
        >
          Delete
        </button>
      </p>
    </>
  );
};

export default AnotateNote;
