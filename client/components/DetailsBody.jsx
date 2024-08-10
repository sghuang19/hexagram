import useSelectedLine from "../hooks/useSelectedLine.js";
import LineStatement from "./LineStatement.jsx";
import Judgement from "./Judgement.jsx";
import clsx from "clsx";

const DetailsBody = ({ details }) => {
  const { id, judgement, statements, summary } = details;
  const [selectedLine, _] = useSelectedLine();
  return (
    <section
      className={clsx(
        "details-body",
        "flex-1",
        "overflow-y-scroll",
        "flex items-center", // let text be displayed in center
        "font-mono",
      )}
    >
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
