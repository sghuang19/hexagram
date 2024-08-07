import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getRandomId } from "../utils/idHelper.js";

export default function ShuffleButton() {
  return (
    <Link className="shuffle-button" to={`/${getRandomId()}`}>
      <GiPerspectiveDiceSixFacesRandom className="nav-icon" />
    </Link>
  );
}
