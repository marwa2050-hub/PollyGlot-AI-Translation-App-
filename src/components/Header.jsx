import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const linkClass = (path) =>
    `text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 ${
      location.pathname === path ? "text-indigo-700" : ""
    }`;

  return (
    <nav
      className="bg-white/90 backdrop-blur-sm shadow-md rounded-b-xl px-4 py-2 flex justify-between items-center"
      style={{ height: "60px", width: "390px" }}
    >
      <div className="flex items-center space-x-2">
        <img src={logo} alt="PollyGlot Logo" className="w-8 h-8" />
        <span className="text-lg font-bold text-indigo-700">PollyGlot</span>
      </div>
      <div className="flex space-x-3 text-sm">
        <Link className={linkClass("/")} to="/">Home</Link>
        <Link className={linkClass("/translate")} to="/translate">Translate</Link>
      </div>
    </nav>
  );
}
