import React, { useContext } from "react";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";
import { ShoeOptionsContext } from "./ShoeOptionsContext";

export default function Selectors(props) {
  const { options, dispatch } = useContext(ShoeOptionsContext);

  function resetSelections(e) {
    e.preventDefault();
    dispatch({ type: "reset" });
  }

  function selectedTxtDisplay() {
    return (
      <>
        <span style={{ fontWeight: "bold" }}>Selected:</span>
        <span style={{ textTransform: "capitalize" }}>
          {options.curColor}
        </span>{" "}
        Shoe Size {options.curSize}
        <br />
      </>
    );
  }

  return (
    <div>
      <SelectSize />
      &nbsp; &nbsp;
      <SelectColor />
      &nbsp; &nbsp;
      <button onClick={resetSelections}>Reset</button>
      <br />
      <br />
      {selectedTxtDisplay()}
      <br />
    </div>
  );
}
