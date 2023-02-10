import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "../src/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ErrorPage from "./error/ErrorPage";
import Dashboard from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import PlayersTable from "./pages/PlayerTablePage";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import ScoutTablePage from "./pages/ScoutTablePage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>

                <Route path="/login" element={<LoginPage />} />
                
                <Route path="/" element={<Dashboard />} />
                <Route path="/playersTable" element={<PlayersTable />} />
                <Route path="/scoutTable" element={<ScoutTablePage />} />

                {/* erro Page */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
