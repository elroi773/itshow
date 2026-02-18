import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/./home/home";
import OnBording from "./page/onbording/onbording1";
import OnBording2 from "./page/onbording/onbording2";
import OnBording3 from "./page/onbording/onbording3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/onbording1" element={<OnBording />} />
        <Route path="/onbording2" element={<OnBording2 />} />
        <Route path="/onbording3" element={<OnBording3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;