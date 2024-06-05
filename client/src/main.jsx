import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./index.css";
import "./styles/page_styles.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import NotFound from "./pages/NotFoundPage/NotFound";
import AppToolbar from "./components/NavigationComponents/Toolbar";
import WarningMessage from "./components/WarningMessage/WarningMessage";
import Forms from "./pages/FormsPage/Forms";
import { ToastContainer } from "react-toastify";
import Responses from "./pages/ResponsesPage/Responses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WarningMessage />
      <CssBaseline />
      <BrowserRouter>
        <AppToolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/about" element={<About />} />
          <Route path="/responses" element={<Responses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
