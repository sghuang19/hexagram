import Yao from "./Yao.jsx";

const Hexagram = ({ data }) => {
  // the yaos will be displayed bottom-up with CSS
  return (
    <div className="hexagram">
      {data.map((value, index) => (
        <Yao key={index} type={value} />
      ))}
    </div>
  );
};

export default Hexagram;
