import React from "react";

import ShoeOptionsContextProvider from "./components/ShoeOptionsContext";

import Shoe from "./components/Shoe";
import Selectors from "./components/Selectors";

import "./styles.css";

function App() {
  return (
    <ShoeOptionsContextProvider>
      <div className="snearkerInvetoryC">
        <h1>Sneaker Inventory Selector</h1>

        <Selectors />

        <br />

        <Shoe />
      </div>
    </ShoeOptionsContextProvider>
  );
}

export default App;
