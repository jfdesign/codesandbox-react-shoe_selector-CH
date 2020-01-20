import React, { useContext } from "react";
import { ShoeOptionsContext } from "./ShoeOptionsContext";

export default function SelectColor(props) {
  const { options, dispatch } = useContext(ShoeOptionsContext);

  function colorOptions() {
    return options.colors.map(function(colorName, i) {
      return (
        <option value={colorName} key={i}>
          {colorName}
        </option>
      );
    });
  }

  function updateColor(e) {
    const color = e.target.value;
    dispatch({ type: "update_color", color });
  }

  return (
    <>
      <span style={{ fontWeight: "bold" }}>Color:</span>&nbsp;
      <select value={options.curColor} onChange={updateColor}>
        {colorOptions()}
      </select>
    </>
  );
}
