import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "../src/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import ErrorPage from "./error/ErrorPage";
import Dashboard from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import PlayersTable from "./pages/PlayerTablePage";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import ScoutTablePage from "./pages/ScoutTablePage";
import { authenticate } from "./redux/auth";
import PremiumPlayers from "./components/PremiumPlayers";
function App() {
  const [theme, colorMode] = useMode();
  //  const [login,setlogin]=useState(false);

  if (!localStorage.getItem("token")) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
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
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/playersTable" element={<PlayersTable />} />
                   <Route path="/scoutTable" element={<ScoutTablePage />} />
                   <Route path="/premiumPlayers" element={<PremiumPlayers />} />
                   <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
}

export default App;