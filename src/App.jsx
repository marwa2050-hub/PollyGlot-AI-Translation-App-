import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translate from "./pages/Translate";

function App() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0098dd 0%, #E1F0F8 50%, #D0E2F2 100%)",
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
