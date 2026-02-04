import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* default entry */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;