import { useParams } from "react-router-dom";

import Hexagram from "./Hexagram.jsx";
import Details from "./Details.jsx";

export default function MainDisplay() {
  let { id } = useParams();
  if (id === undefined) {
    id = "111111"; // TODO: make this random
  }
  return (
    <>
      <Hexagram id={id} />
      <Details id={id} />
    </>
  );
}
