import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/Home";
import EmployeeScreen from "./Pages/Employee";
import Navbar from "./Components/Navbar";
import ManagerTree from "./Pages/ManagerTree";
const App = () => {
  const darkTheme = createTheme({
    palette: {
      // mode: "dark",
      mode: "light",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/employee/:id" element={<EmployeeScreen />} />
            <Route path="/tree" element={<ManagerTree />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
