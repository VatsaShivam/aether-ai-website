import React from "react";
import { createRoot } from "react-dom/client";
import AetherAIWebsite from "./AetherAIWebsite.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AetherAIWebsite />
  </React.StrictMode>
);
