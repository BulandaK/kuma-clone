import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import StatusPage from "./pages/StatusPage/StatusPage";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D1117",
    },
    secondary: {
      main: "#161B22",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-status-page" element={<StatusPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
