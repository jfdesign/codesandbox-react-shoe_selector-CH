import React, { useContext } from "react";
import { ShoeOptionsContext } from "./ShoeOptionsContext";

export default function Shoe(props) {
  const { options } = useContext(ShoeOptionsContext);

  return (
    <div
      className="shoeC"
      style={{ background: options.curColor, width: "300px", height: "200px" }}
    >
      {/* <span>Shoe is {options.curColor}</span> */}
      <img src={"./images/" + options.curColor + ".jpg"} />
    </div>
  );
}
