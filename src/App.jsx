import { createRoot } from "react-dom/client";

import Hexagram from "./components/Hexagram.jsx";

import "./style.css";

function App() {
  return (
    <>
      <Hexagram data={[0, 0, 0, 1, 1, 1]} />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
