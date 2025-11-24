import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/app";
import About from "@/routes/about";

import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./layouts/layout";
import { TaskId } from "./routes/taskId";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks/:taskId" element={<TaskId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
