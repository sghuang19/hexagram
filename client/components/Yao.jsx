import YinYao from "./YinYao.jsx";
import YangYao from "./YangYao.jsx";

const Yao = ({ type }) => {
  // `class="yao yin/yang" are included in <YangYao /> and <YinYao />
  return type ? <YangYao /> : <YinYao />;
};

export default Yao;
