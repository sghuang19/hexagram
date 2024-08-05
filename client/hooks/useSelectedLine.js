import { useContext } from "react";
import SelectedLineContext from "../context/SelectedLineContext.js";

export default function useSelectedLine() {
  return useContext(SelectedLineContext);
}
