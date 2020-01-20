import React, { useContext } from "react";
import { ShoeOptionsContext } from "./ShoeOptionsContext";

export default function SelectSize(props) {
  const { options, dispatch } = useContext(ShoeOptionsContext);

  function sizeOptions() {
    return options.sizes.map(function(size, i) {
      return (
        <option value={size} key={i}>
          {size}
        </option>
      );
    });
  }

  function updateSize(e) {
    const size = e.target.value;
    dispatch({ type: "update_size", size });
  }

  return (
    <>
      <span style={{ fontWeight: "bold" }}>Size:</span>&nbsp;
      <select value={options.curSize} onChange={updateSize}>
        {sizeOptions()}
      </select>
    </>
  );
}
