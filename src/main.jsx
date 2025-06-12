import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TechQuery from "./provider/tech-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TechQuery>
      <App />
    </TechQuery>
  </StrictMode>
);
