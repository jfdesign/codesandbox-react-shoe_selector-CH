import Inventory from "./data/Inventory";
import DefInventory from "./data/DefInventory";

export default function ShoeReducer(state, action) {
  switch (action.type) {
    case "reset":
      //re-initialize everything
      return DefInventory;

    case "update_size":
      //Gets new colors based on size pickeds
      const revisedColors = Inventory.bySize[action.size];

      //Update the state with new current size, revised color and update current color
      return {
        options: {
          ...state.options,
          curSize: action.size,
          colors: revisedColors,
          curColor: revisedColors[0]
        }
      };

    case "update_color":
      //Gets new colors based on size pickeds
      const revisedSizes = Inventory.byColor[action.color];

      //Update the state with new current colors, revised sizes and update current size
      return {
        options: {
          ...state.options,
          curColor: action.color,
          sizes: revisedSizes,
          curSize: revisedSizes[0]
        }
      };

    default:
      return state;
  }
}
