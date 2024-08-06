import { motion } from "framer-motion";

import useSelectedLine from "../hooks/useSelectedLine.js";

/**
 * @param {boolean} lineType - true for yang, false for yin
 * @param {number} lineIndex - 1 to 6, 0 is reserved for no selection state
 * @return {JSX.Element}
 * @constructor
 */
export default function Yao({ lineType, lineIndex }) {
  const [selectedLine, setSelectedLine] = useSelectedLine();

  const handleClick = (event, lineIndex) => {
    event.stopPropagation(); // stop event from propagating to somewhere else
    setSelectedLine(selectedLine === lineIndex ? 0 : lineIndex);
  };

  const selectionClass = selectedLine
    ? selectedLine === lineIndex
      ? " selected"
      : " unselected"
    : "";

  return (
    <motion.div
      className={`yao ${lineType ? "yang" : "yin"}${selectionClass}`}
      onClick={(event) => {
        handleClick(event, lineIndex);
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {lineType ? null : (
        <>
          <div className="yin-part"></div>
          <div className="yin-gap"></div>
          <div className="yin-part"></div>
        </>
      )}
    </motion.div>
  );
}
