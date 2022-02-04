import { Home } from "~/pages/App";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function appRoutes() {
  return (
    <Routes>
      <Route path="/createQuiz" element={<Home />} />
    </Routes>
  );
}
