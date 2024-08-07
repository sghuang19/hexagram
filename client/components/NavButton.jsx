import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nextId, prevId } from "../utils/idHelper.js";

/**
 * @param {"prev" | "next"} direction The direction to nav to
 * @param {HexagramID} id The current id
 */
export default function NavButton({ direction, id }) {
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
