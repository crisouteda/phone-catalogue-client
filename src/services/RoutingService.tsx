import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../screens/Dashboard";

export const RoutingService = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

// TODO: add routing for modal
