import React from "react";
import { createRoot } from  "react-dom/client";
import App from "./App";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);