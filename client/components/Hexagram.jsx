import Yao from "./Yao.jsx";
import clsx from "clsx";

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
    <div
      className={clsx(
        "hexagram",
        "h-2/5 wide:h-full wide:flex-[1]", // takes up less space in portrait view
        "flex flex-col-reverse align-middle",
        "m-0 px-4 wide:py-8 wide:px-12",
      )}
    >
      {Array.from(id).map((char, index) => {
        return (
          <Yao key={index} lineIndex={index + 1} lineType={char === "1"} />
        );
      })}
    </div>
  );
};

export default Hexagram;
