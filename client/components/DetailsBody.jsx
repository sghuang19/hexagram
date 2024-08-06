import getLineName from "../utils/getLineName.js";
import useSelectedLine from "../hooks/useSelectedLine.js";
import LineStatement from "./LineStatement.jsx";
import Judgement from "./Judgement.jsx";

const DetailsBody = ({ details }) => {
  const { id, judgement, statements, summary } = details;
  const [selectedLine, _] = useSelectedLine();
  return (
    <section className="details-body">
      {selectedLine ? (
        <LineStatement
          type={id[selectedLine - 1] === "1"}
          selectedLine={selectedLine}
          statement={statements[selectedLine - 1]}
        />
      ) : (
        <Judgement judgement={judgement} />
      )}
    </section>
  );
};

export default DetailsBody;
