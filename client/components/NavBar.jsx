import NavButton from "./NavButton.jsx";
import ShuffleButton from "./ShuffleButton.jsx";

export default function NavBar({ id }) {
  return (
    <nav className="nav-bar">
      <NavButton direction={"prev"} id={id} />
      <ShuffleButton />
      <NavButton direction={"next"} id={id} />
    </nav>
  );
}
