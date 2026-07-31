import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/orders" element={<DashBoard />} />
          <Route path="/products" element={<DashBoard />} />
          <Route path="/customers" element={<DashBoard />} />
          <Route path="/reports" element={<DashBoard />} />
          <Route path="/settings" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
