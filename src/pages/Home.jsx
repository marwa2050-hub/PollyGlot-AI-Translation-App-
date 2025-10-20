import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

export default function Home() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "none",
        backgroundColor: "transparent",
      }}
    >
      <div
        className="flex flex-col justify-between items-center"
        style={{
          width: "390px",
          height: "780px",
          borderRadius: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          position: "relative",
          background: "#FFFFFF",
        }}
      >
        {/* Header */}
        <header
          className="relative w-full"
          style={{
            width: "390px",
            height: "213px",
            backgroundColor: "#0D182E",
          }}
        >
          <img
            src={logo2}
            alt="Logo Right"
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              width: "300px",
              height: "200px",
              opacity: 1,
              zIndex: 1,
            }}
          />

          <img
            src={logo}
            alt="PollyGlot Logo"
            style={{
              position: "absolute",
              top: "65px",
              left: "42px",
              width: "94.88px",
              height: "84.80px",
              zIndex: 2,
            }}
          />

          <span
            style={{
              position: "absolute",
              top: "69.07px",
              left: "151.9px",
              width: "138px",
              height: "65px",
              color: "#32CD32",
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: "40px",
              fontWeight: "800",
              lineHeight: "65px",
              zIndex: 2,
            }}
          >
            PollyGlot
          </span>

          <span
            style={{
              position: "absolute",
              top: "127px",
              left: "152px",
              width: "196px",
              height: "16px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "12px",
              fontWeight: "400",
              color: "#FFFFFF",
              lineHeight: "16px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              zIndex: 2,
            }}
          >
            Perfect Translation Every Time
          </span>
        </header>

        <main
          className="flex flex-col justify-center items-center text-center w-full flex-grow"
          style={{
            flex: 1,
            background: "#FFFFFF",
            padding: "20px",
            fontFamily: "'Poppins', sans-serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            className="text-3xl font-extrabold"
            style={{ color: "#32CD32" }}
          >
            Welcome to PollyGlot
          </h1>

          <p
            className="text-sm leading-relaxed px-6 text-center"
            style={{ color: "#333333" }}
          >
            Translate your text into multiple languages quickly and easily.
          </p>

          <Link
            to="/translate"
            className="inline-block w-4/5 py-3 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 text-base"
            style={{
              backgroundColor: "#035A9D",
              textDecoration: "none",
            }}
          >
            Start Translating
          </Link>
        </main>

        <footer
          className="w-full text-center text-sm"
          style={{
            backgroundColor: "#0D182E",
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <p className="font-medium" style={{ margin: 0 }}>
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-blue-300 font-semibold">Marwa</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
