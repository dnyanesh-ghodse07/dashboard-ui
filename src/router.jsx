import React from "react";
import { Routes, Route } from "react-router-dom";
// const Accounts = React.lazy(() => import("./pages/accounts"));
// const Advisor = React.lazy(() => import("./pages/advisor"));
// const Contact = React.lazy(() => import("./pages/contact"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
// const Payroll = React.lazy(() => import("./pages/payroll"));
// const Reports = React.lazy(() => import("./pages/reports"));
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Dashboard />} />
        <Route path="/advisor" element={<Dashboard />} />
        <Route path="/contact" element={<Dashboard />} />
        <Route path="/payroll" element={<Dashboard />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/contacts" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
