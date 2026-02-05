import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home";
import OnBording from "./page/Join/onbording1";
import OnBording2 from "./page/Join/onbording2";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/onbording1" element={<OnBording />} />
        <Route path="/onbording2" element={<OnBording2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;