import Yao from "./Yao.jsx";

/**
 * Displays the hexagram
 *
 * @param data - A string of 6 binary digits.
 */
const Hexagram = ({ id }) => {
  // the yaos will be displayed bottom-up with CSS
  // unique key is needed for a list
  // lineIndex is offset by 1 as 0 is reserved for the default state
  return (
    <div className="hexagram">
      {Array.from(id).map((char, index) => {
        return (
          <Yao key={index} lineIndex={index + 1} lineType={char === "1"} />
        );
      })}
    </div>
  );
};

export default Hexagram;
