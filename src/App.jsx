import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translate from "./pages/Translate";

function App() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "none",
        backgroundColor: "transparent",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </div>
  );
}

export default App;
