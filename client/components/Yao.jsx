import { motion } from "framer-motion";
import clsx from "clsx";

import useSelectedLine from "../hooks/useSelectedLine.js";

/**
 * @class
 * @param {boolean} lineType - True for yang, false for yin
 * @param {number} lineIndex - 1 to 6, 0 is reserved for no selection state
 * @returns {JSX.Element}
 */
export default function Yao({ lineType, lineIndex }) {
  const [selectedLine, setSelectedLine] = useSelectedLine();

  const handleClick = (event, lineIndex) => {
    event.stopPropagation(); // stop event from propagating to somewhere else
    setSelectedLine(selectedLine === lineIndex ? 0 : lineIndex);
  };

  return (
    <motion.div
      className={clsx(
        "yao flex-1 w-full my-1 md:my-4", // major type is yao
        selectedLine && // nothing if selectedLine === 0
          (selectedLine === lineIndex ? "selected" : "unselected"),
        // TODO: override selected and unselected
      )}
      onClick={(event) => {
        handleClick(event, lineIndex);
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {lineType ? <YaoYang /> : <YaoYin />}
    </motion.div>
  );
}

const YinPart = () => (
  <div
    className={clsx(
      "yin-part",
      "h-full flex-auto basis-2/5 bg-black dark:bg-white rounded-[10px]",
    )}
  ></div>
);

export function YaoYin() {
  return (
    <div className={"yin h-full flex justify-stretch"}>
      <YinPart />
      <div className="yin-gap flex-auto basis-1/5"></div>
      <YinPart />
    </div>
  );
}

export function YaoYang() {
  return (
    <div className={"yang h-full bg-black dark:bg-white rounded-[10px]"}></div>
  );
}
