import { SignIn } from "~/pages/Auth";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function appRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
