import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import frenchFlag from "../assets/french.png";
import spanishFlag from "../assets/spanish.png";
import japaneseFlag from "../assets/japanese.png";

export default function Translate() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTranslate = async () => {
    if (!text || !language) {
      alert("Please enter text and select a language!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://pollyglot-worker.marwanurestani.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language }),
      });

      const data = await res.json();
      if (data.translated) {
        setTranslated(data.translated);
        setShowCard(true);
      } else {
        alert("Translation failed");
      }
    } catch (err) {
      alert("Translation failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    setText("");
    setTranslated("");
    setLanguage("");
    setShowCard(false);
  };

  const languageOptions = [
    { label: "French", flag: frenchFlag },
    { label: "Spanish", flag: spanishFlag },
    { label: "Japanese", flag: japaneseFlag },
  ];

  const buttonStyle = {
    padding: "10px 25px",
    background: "linear-gradient(90deg, #32CD32, #1E7F50)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const buttonLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "none",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          width: "390px",
          height: "780px",
          borderRadius: "25px",
          background: "#FFFFFF",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header */}
        <header style={{ width: "390px", height: "213px", backgroundColor: "#0D182E", position: "relative" }}>
          <img src={logo2} alt="Logo Right" style={{ position: "absolute", top: 0, right: 0, width: 300, height: 200, zIndex: 1 }} />
          <img src={logo} alt="PollyGlot Logo" style={{ position: "absolute", top: 65, left: 42, width: 94.88, height: 84.8, zIndex: 2 }} />
          <span style={{ position: "absolute", top: 69, left: 151, color: "#32CD32", fontFamily: "'Big Shoulders Display', sans-serif", fontSize: 40, fontWeight: 800, lineHeight: "65px", zIndex: 2 }}>PollyGlot</span>
          <span style={{ position: "absolute", top: 127, left: 152, color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 400, zIndex: 2 }}>Perfect Translation Every Time</span>
        </header>

        {/* کارت ورود متن */}
        {!showCard && (
          <div
            style={{
              position: "absolute",
              top: 230,
              left: "50%",
              transform: "translateX(-50%)",
              width: 362,
              height: 480,
              borderRadius: 15,
              border: "4px solid #252F42",
              backgroundColor: "#FFFFFF",
              padding: 15,
              display: "flex",
              flexDirection: "column",
              gap: 15,
              boxSizing: "border-box",
              alignItems: "center",
            }}
          >
            <label style={{ color: "#035A9D", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 18 }}>Text to translate 👇</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                width: "90%",
                height: 118,
                borderRadius: 8,
                padding: 8,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                resize: "none",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
            />

            <label style={{ color: "#035A9D", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 18 }}>Select language 👇</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
              {languageOptions.map((opt) => (
                <div
                  key={opt.label}
                  onClick={() => setLanguage(opt.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    cursor: "pointer",
                    backgroundColor: language === opt.label ? "#D0E2F2" : "transparent",
                    padding: 5,
                    borderRadius: 6,
                  }}
                >
                  <img src={opt.flag} alt={opt.label} style={{ width: 24, height: 16 }} />
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleTranslate}
              style={{ ...buttonStyle, marginTop: "auto" }}
              disabled={loading}
              onMouseEnter={buttonHover}
              onMouseLeave={buttonLeave}
            >
              {loading ? "Translating..." : "Translate"}
            </button>
          </div>
        )}

        {/* کارت ترجمه */}
        {showCard && (
          <div
            style={{
              position: "absolute",
              top: 230,
              left: "50%",
              transform: "translateX(-50%)",
              width: 362,
              minHeight: 480,
              borderRadius: 15,
              border: "4px solid #252F42",
              backgroundColor: "#FFFFFF",
              padding: 15,
              display: "flex",
              flexDirection: "column",
              gap: 15,
              boxSizing: "border-box",
              alignItems: "center",
            }}
          >
            <label style={{ color: "#035A9D", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 18 }}>Original text 👇</label>
            <div style={{ width: "90%", minHeight: 100, borderRadius: 8, padding: 8, fontFamily: "'Poppins', sans-serif", fontSize: 18, border: "1px solid #ccc", backgroundColor: "#f0f4f8", textAlign: "center" }}>{text}</div>

            <label style={{ color: "#035A9D", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 18 }}>Your translation 👇</label>
            <div style={{ width: "90%", minHeight: 100, borderRadius: 8, padding: 8, fontFamily: "'Poppins', sans-serif", fontSize: 18, border: "1px solid #ccc", backgroundColor: "#f0f4f8", textAlign: "center" }}>{translated}</div>

            <button
              onClick={handleStartOver}
              style={{ ...buttonStyle, marginTop: "auto" }}
              onMouseEnter={buttonHover}
              onMouseLeave={buttonLeave}
            >
              Start Over
            </button>
          </div>
        )}

        {/* Back button پایین صفحه */}
        <button
          onClick={() => navigate("/")}
          style={{ ...buttonStyle, position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)" }}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
