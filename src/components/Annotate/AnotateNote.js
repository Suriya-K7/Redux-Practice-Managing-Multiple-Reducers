import React from "react";
import { useDispatch } from "react-redux";
import { ACTION } from "../../App";

const AnotateNote = ({ each }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{each.text}</p>
      <p>
        <span>
          has <span className="mx-2"> {each.value}</span>
        </span>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={() =>
            dispatch({
              type: ACTION.VOTE,
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
              type: ACTION.DEL,
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
