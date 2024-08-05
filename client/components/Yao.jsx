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
    if (selectedLine === lineIndex) setSelectedLine(0);
    else setSelectedLine(lineIndex);
    console.log(`Line clicked: ${lineIndex}, now ${selectedLine} is selected`);
  };

  return (
    <div
      className={`yao ${lineType ? "yang" : "yin"} ${selectedLine === lineIndex ? "selected" : ""}`}
      onClick={(event) => {
        handleClick(event, lineIndex);
      }}
    >
      {lineType ? null : (
        <>
          <div className="yin-part"></div>
          <div className="yin-gap"></div>
          <div className="yin-part"></div>
        </>
      )}
    </div>
  );
}
