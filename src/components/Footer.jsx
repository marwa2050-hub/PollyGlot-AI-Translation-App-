export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(to top, #D0E2F2, #E1F0F8, #F3FAFD)",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <p className="text-gray-700 text-sm">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="text-indigo-600 font-semibold">Marwa</span>
      </p>
    </footer>
  );
}
