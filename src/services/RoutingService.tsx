import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryParamsService } from "./QueryParamsService";
import Dashboard from "../screens/Dashboard";

export const RoutingService = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <QueryParamsService />
    </BrowserRouter>
  );
};

// TODO: add routing for modal
