import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Toaster } from "sonner";

import { createTheme } from "@mui/material/styles";
import { Typography, ThemeProvider } from "@mui/material";

import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import EditPage from "./pages/Editpage";
import WishlistPage from "./pages/WishlistPage";

import ResponsiveAppBar from "./components/AppBar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fad001ff",
        contrastText: "#000",
      },
      secondary: {
        main: "#db8310ff",
        contrastText: "#fff",
      },
      azure: {
        main: "#007FFF",
        contrastText: "#fff",
      },
      green: {
        main: "#0EAF29",
        contrastText: "#fff",
      },
      purple: {
        main: "#8623d1ff",
        contrastText: "#fff",
      },
      grey: {
        main: "#bdbdbd",
        contrastText: "#000",
      },
      black: {
        main: "#000",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddNewPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
