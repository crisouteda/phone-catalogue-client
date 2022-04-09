import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import { PhoneModal } from "../components/phoneModal";

export const RoutingService = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<PhoneModal />} />
      </Routes>
    </BrowserRouter>
  );
};

// TODO: add routing for modal
