import Inventory from "./Inventory";

const allColors = Inventory.allColors;
const allSizes = Inventory.allSizes;

const optionsObj = {
  options: {
    sizes: allSizes,
    curSize: allSizes[0],
    colors: allColors,
    curColor: allColors[0]
  }
};

export default optionsObj;
