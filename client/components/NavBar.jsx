import { Link } from "react-router-dom";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { getRandomId, prevId, nextId } from "../utils/idHelper.js";

export default function NavBar({ id }) {
  return (
    <nav className="nav-bar flex justify-evenly w-full">
      <NavButton direction={"prev"} id={id} />
      <ShuffleButton />
      <NavButton direction={"next"} id={id} />
    </nav>
  );
}

/**
 * @param {"prev" | "next"} direction The direction to nav to
 * @param {HexagramID} id The current id
 */
function NavButton({ direction, id }) {
  // .nav-icon defined in CSS, Tailwind doesn't work here
  return (
    <Link
      to={`/${direction === "prev" ? prevId(id) : nextId(id)}`}
      className="nav-button"
    >
      {direction === "prev" ? (
        <FaArrowLeft className="nav-icon" />
      ) : (
        <FaArrowRight className="nav-icon" />
      )}
    </Link>
  );
}

function ShuffleButton() {
  // .nav-icon defined in CSS, Tailwind doesn't work here
  return (
    <Link className="nav-button" to={`/${getRandomId()}`}>
      <GiPerspectiveDiceSixFacesRandom className="nav-icon" />
    </Link>
  );
}
