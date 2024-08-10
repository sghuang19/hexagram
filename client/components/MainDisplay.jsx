import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hexagram from "./Hexagram.jsx";
import Details from "./Details.jsx";
import SelectedLineContext from "../context/SelectedLineContext.js";
import clsx from "clsx";

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
      <div
        id="main"
        className={clsx(
          "h-full w-full", // takes up all space in the viewport
          "flex flex-col wide:flex-row justify-between", // responsive layout
          "bg-transparent dark:bg-black text-black dark:text-white", // background color
          "text-lg md:text-xl lg:text-2xl", // text size, name is override
        )}
      >
        <Hexagram id={id} />
        <Details id={id} />
      </div>
    </SelectedLineContext.Provider>
  );
}
