import getLineName from "../utils/getLineName.js";
import useSelectedLine from "../hooks/useSelectedLine.js";

const DetailsBody = ({ details }) => {
  const { id, judgement, statements, summary } = details;
  const [selectedLine, _] = useSelectedLine();
  return (
    <section className="details-body">
      {selectedLine ? (
        <>
          <h3 className="line-index">
            {getLineName(selectedLine, id[selectedLine - 1] === "1")}
          </h3>
          <p className="line-statement">{statements[selectedLine - 1]}</p>
        </>
      ) : (
        <p className="judgement">{judgement}</p>
      )}
    </section>
  );
};

export default DetailsBody;
