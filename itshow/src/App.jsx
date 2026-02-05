import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home";
import OnBording from "./page/Join/onbording1";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/onbording1" element={<OnBording />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;