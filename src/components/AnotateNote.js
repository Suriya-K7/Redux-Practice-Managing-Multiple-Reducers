import React from "react";
import { useDispatch } from "react-redux";

const AnotateNote = ({ each }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{each.text}</p>
      <p>
        has {each.value}
        <button
          className="btn btn-outline-primary mx-5"
          onClick={() =>
            dispatch({
              type: "vote",
              payload: { id: each.id, value: each.value },
            })
          }
        >
          Vote
        </button>
      </p>
    </>
  );
};

export default AnotateNote;
