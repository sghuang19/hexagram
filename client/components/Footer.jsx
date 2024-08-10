import NavBar from "./NavBar.jsx";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa6";

export default function Footer({ id }) {
  return (
    <div id="footer" className="mt-auto py-1">
      <NavBar id={id} />
      <InfoBar />
    </div>
  );
}

export function InfoBar() {
  return (
    <div
      id="info"
      className={clsx(
        "text-center text-slate-600 text-xs md:text-sm lg:text-base md:pt-2",
      )}
    >
      By{" "}
      <a className="link" href="https://sghuang.com">
        Samuel Huang
      </a>{" "}
      | Open-sourced on{" "}
      <a href="https://github.com/sghuang19/hexagram">
        <FaGithub className="inline" />
      </a>
    </div>
  );
}
