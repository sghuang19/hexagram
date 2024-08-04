import { createRoot } from "react-dom/client";

import Hexagram from "./components/Hexagram.jsx";
import Details from "./components/Details.jsx";

import "./style.css";

function App() {
  return (
    <>
      <Hexagram data={[0, 0, 0, 1, 1, 1]} />
      <Details />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
