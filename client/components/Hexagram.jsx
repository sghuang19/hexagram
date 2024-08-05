import Yao from "./Yao.jsx";

/**
 * Displays the hexagram
 * @param data A string of 6 binary digits.
 */
const Hexagram = ({ id }) => {
  // the yaos will be displayed bottom-up with CSS
  const lines = Array.prototype.map.call(id, (char, index) => {
    return <Yao key={index} type={char === "1"} />;
  });
  return <div className="hexagram">{lines}</div>;
};

export default Hexagram;
