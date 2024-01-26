import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-status-page" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
