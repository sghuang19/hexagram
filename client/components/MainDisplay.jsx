import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hexagram from "./Hexagram.jsx";
import Details from "./Details.jsx";
import SelectedLineContext from "../context/SelectedLineContext.js";

export default function MainDisplay() {
  const { id } = useParams();
  const [selectedLine, setSelectedLine] = useState(0);

  // reset selectedLine when id changes
  useEffect(() => {
    setSelectedLine(0);
  }, [id]);

  // pass the hook into children
  return (
    <SelectedLineContext.Provider value={[selectedLine, setSelectedLine]}>
      <div id="main">
        <Hexagram id={id} />
        <Details id={id} />
      </div>
    </SelectedLineContext.Provider>
  );
}
