import React from "react";
import { useSelector } from "react-redux";
import AnotateNote from "./AnotateNote";

const Anotates = () => {
  const data = useSelector((state) => state.anotate);
  return (
    <div>
      {data && data.map((each) => <AnotateNote key={each.id} each={each} />)}
    </div>
  );
};

export default Anotates;
