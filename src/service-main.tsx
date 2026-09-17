import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import ServicePage from "./ServicePage";

const root = document.getElementById("root")!;
const page = <StrictMode><ServicePage /></StrictMode>;

if (root.hasChildNodes()) {
  hydrateRoot(root, page);
} else {
  createRoot(root).render(page);
}
